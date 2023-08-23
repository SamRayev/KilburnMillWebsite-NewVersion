// Import Basic Packages Below
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import emailjs from '@emailjs/browser';

// Import Images Below
import Splash from "../Assets/GeneralImages/Splash.png"
import SplashBorder from "../Assets/GeneralImages/SplashBorder.png"
import GridOne from "../Assets/GeneralImages/HomeOne.png"
import GridTwo from "../Assets/GeneralImages/HomeTwo.png"
import GridThree from "../Assets/GeneralImages/HomeThree.png"
import GridFour from "../Assets/GeneralImages/HomeFour.png"
import GridFive from "../Assets/GeneralImages/HomeFive.png"
import GridSix from "../Assets/GeneralImages/HomeSix.png"
import EventsImage from "../Assets/GeneralImages/HomeEvents.jpg"
import WeddingsImage from "../Assets/GeneralImages/HomeWeddings.png"
import IsolationImage from "../Assets/GeneralImages/HomeIsolation.png"
import EntertainmentImage from "../Assets/GeneralImages/HomeEntertainment.jpg"

// Import CSS Stylsheet Below
import "../Styles/Home.css"

class Collapsible extends React.Component {
  constructor(props) {
    super(props)

    // Bind class methods
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.continueOpenCollapsible = this.continueOpenCollapsible.bind(this);

    // Defaults the dropdown to be closed
    if (props.open) {
      this.state = {
        isClosed: false,
        shouldSwitchAutoOnNextCycle: false,
        height: 'auto',
        transition: 'none',
        hasBeenOpened: true,
        overflow: props.overflowWhenOpen,
        inTransition: false,
      }
    } else {
      this.state = {
        isClosed: true,
        shouldSwitchAutoOnNextCycle: false,
        height: 0,
        transition: `height ${props.transitionTime}ms ${props.easing}`,
        hasBeenOpened: false,
        overflow: 'hidden',
        inTransition: false,
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.shouldOpenOnNextCycle){
      this.continueOpenCollapsible();
    }

    if (prevState.height === 'auto' && this.state.shouldSwitchAutoOnNextCycle === true) {
      window.setTimeout(() => { // Set small timeout to ensure a true re-render
        this.setState({
          height: 0,
          overflow: 'hidden',
          isClosed: true,
          shouldSwitchAutoOnNextCycle: false,
        });
      }, 50);
    }

    // If there has been a change in the open prop (controlled by accordion)
    if (prevProps.open !== this.props.open) {
      if(this.props.open === true) {
        this.openCollapsible();
        this.props.onOpening();
      } else {
        this.closeCollapsible();
        this.props.onClosing();
      }
    }
  }

  closeCollapsible() {
    this.setState({
      shouldSwitchAutoOnNextCycle: true,
      height: this.refs.inner.offsetHeight,
      transition: `height ${this.props.transitionCloseTime ?
        this.props.transitionCloseTime : this.props.transitionTime}ms ${this.props.easing}`,
      inTransition: true,
    });
  }

  openCollapsible() {
    this.setState({
      inTransition: true,
      shouldOpenOnNextCycle: true,
    });
  }

  continueOpenCollapsible() {
    this.setState({
      height: this.refs.inner.offsetHeight,
      transition: `height ${this.props.transitionTime}ms ${this.props.easing}`,
      isClosed: false,
      hasBeenOpened: true,
      inTransition: true,
      shouldOpenOnNextCycle: false,
    });
  }

  handleTriggerClick(event) {
    event.preventDefault();

    if (this.props.triggerDisabled) {
      return
    }

    if (this.props.handleTriggerClick) {
      this.props.handleTriggerClick(this.props.accordionPosition);
    } else {
      if (this.state.isClosed === true) {
        this.openCollapsible();
        this.props.onOpening();
      } else {
        this.closeCollapsible();
        this.props.onClosing();
      }
    }
  }

  renderNonClickableTriggerElement() {
    if (this.props.triggerSibling && typeof this.props.triggerSibling === 'string') {
      return (
        <span className={`${this.props.classParentString}__trigger-sibling`}>{this.props.triggerSibling}</span>
      )
    } else if(this.props.triggerSibling) {
      return <this.props.triggerSibling />
    }

    return null;
  }

  handleTransitionEnd() {
    // Switch to height auto to make the container responsive
    if (!this.state.isClosed) {
      this.setState({ height: 'auto', overflow: this.props.overflowWhenOpen, inTransition: false });
      this.props.onOpen();
    } else {
      this.setState({ inTransition: false });
      this.props.onClose();
    }
  }

  render() {
    var dropdownStyle = {
      height: this.state.height,
      WebkitTransition: this.state.transition,
      msTransition: this.state.transition,
      transition: this.state.transition,
      overflow: this.state.overflow,
    }

    var openClass = this.state.isClosed ? 'is-closed' : 'is-open';
    var disabledClass = this.props.triggerDisabled ? 'is-disabled' : '';

    //If user wants different text when tray is open
    var trigger = (this.state.isClosed === false) && (this.props.triggerWhenOpen !== undefined)
                  ? this.props.triggerWhenOpen
                  : this.props.trigger;

    // If user wants a trigger wrapping element different than 'span'
    const TriggerElement = this.props.triggerTagName;

    // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
    var children = this.props.lazyRender
      && !this.state.hasBeenOpened
      && this.state.isClosed
      && !this.state.inTransition ? null : this.props.children;

    // Construct CSS classes strings
    const triggerClassString = `${this.props.classParentString}__trigger ${openClass} ${disabledClass} ${
      this.state.isClosed ? this.props.triggerClassName : this.props.triggerOpenedClassName
    }`;
    const parentClassString = `${this.props.classParentString} ${
      this.state.isClosed ? this.props.className : this.props.openedClassName
    }`;
    const outerClassString = `${this.props.classParentString}__contentOuter ${this.props.contentOuterClassName}`;
    const innerClassString = `${this.props.classParentString}__contentInner ${this.props.contentInnerClassName}`;

    return(
      <div className={parentClassString.trim()}>
        <TriggerElement
          className={triggerClassString.trim()}
          onClick={this.handleTriggerClick}
          style={this.props.triggerStyle && this.props.triggerStyle}
          onKeyPress={(event) => {
            const { key } = event;
              if (key === ' ' || key === 'Enter') {
                this.handleTriggerClick(event);
              }
            }}
            tabIndex={this.props.tabIndex && this.props.tabIndex}
        >
          {trigger}
        </TriggerElement>

        {this.renderNonClickableTriggerElement()}

        <div
          className={outerClassString.trim()}
          ref="outer"
          style={dropdownStyle}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <div
            className={innerClassString.trim()}
            ref="inner"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Collapsible.defaultProps = {
  transitionTime: 400,
  transitionCloseTime: null,
  triggerTagName: 'span',
  easing: 'linear',
  open: false,
  classParentString: 'Collapsible',
  triggerDisabled: false,
  lazyRender: false,
  overflowWhenOpen: 'hidden',
  openedClassName: '',
  triggerStyle: null,
  triggerClassName: '',
  triggerOpenedClassName: '',
  contentOuterClassName: '',
  contentInnerClassName: '',
  className: '',
  triggerSibling: null,
  onOpen: () => {},
  onClose: () => {},
  onOpening: () => {},
  onClosing: () => {},
  tabIndex: null,
};

const Home = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
    await emailjs.sendForm('service_xkdeb51', 'template_7p0r11p', form.current, 'mwL-BIF7A2BTUfsXe') // Change these ID's to the proper account ID's
    console.log('Email sent successfully');
    form.current.reset(); // Clear the form fields
    } catch (error) {
    console.error('Error sending email:', error);
    }
  };

  return (
    <div className='home flex flex-col font-serif'>
      <div className='hero-box flex flex-col'>
        <ul className='flex gap-6'>
          <li><NavLink to='/events' className='hero-btn'>EVENTS</NavLink></li>
          <li><NavLink to='/weddings' className='hero-btn'>WEDDINGS</NavLink></li>
          <li><NavLink to='/entertainment' className='hero-btn'>ENTERTAINMENT</NavLink></li>
          <li><NavLink to='/gallery' className='hero-btn'>GALLERY</NavLink></li>
          <li><NavLink to='/leasing' className='hero-btn'>LEASING</NavLink></li>
          <li><NavLink to='/contact' className='hero-btn'>CONTACT</NavLink></li>
        </ul>
        <div className='flex flex-row'>
          <img src={SplashBorder}></img>
          <div className='hero flex flex-col items-center'>
            <h1>KILBURN MILL</h1>
            <h2><span>AT CLARKS COVE</span></h2>
            <img src={Splash}></img>
            <NavLink to='/directory' className='hero-btn'>DIRECTORY</NavLink>
          </div>
          <img src={SplashBorder}></img>
        </div>
      </div>

      <div className='events flex flex-col'>
        <div className='event-items'>
          <img className="event-item" src={GridOne} />
          <img className="event-item" src={GridTwo} />
          <img className="event-item" src={GridThree} />
        </div>
        <div className='event-items'>
          <img className="event-item" src={GridFour} />
          <img className="event-item" src={GridFive} />
          <img className="event-item" src={GridSix} />
        </div>
      </div>
      <div className='event-box flex font-bold'>
          <p className='flex'>EST. 1907</p>
          <p className='flex'>41.2032° N</p>
        </div>
      <div className='tabs flex flex-col items-center '>
        <Collapsible trigger="Events">
          <div className='flex flex-row justify-between'>
            <div>
              <p>
                Let Kilburn help you plan the perfect event!
              </p>
              <p>
                With over 20,000 square feet of open floor plan event space, rooms ranging from intimate to spacious indoor and outdoor space, catering, décor and audio visual rentals, ample free parking and more, Kilburn Mill can accommodate your event in unique style to fit any budget.
              </p>
              <p className='text-red-600 font-bold'><NavLink to='/events' className='hero-btn'><u>learn more</u></NavLink></p>
            </div>
            <div className='pr-12'>
              <img className='tab-image' src={EventsImage} />
            </div>
          </div>
        </Collapsible>
        <Collapsible trigger="Weddings">
          <div className='flex flex-row justify-between'>
            <div>
              <p>
                Let Kilburn Mill’s wedding team help you make your wedding a statement of who you are. On-site ceremonies with water views or in our private courtyard. Set up a personal tour and consultation today.
              </p>
              <p>
                A historic waterfront venue, The Kilburn Mill offers couples open spaces with original white pine floors, thirteen foot windows looking out on Clark’s Cove for a combination of elegant and rustic we call Industrial Chic. 
              </p>
              <p className='text-red-600 font-bold'><NavLink to='/weddings' className='hero-btn'><u>learn more</u></NavLink></p>
            </div>
            <div className='pr-12'>
              <img className='tab-image' src={WeddingsImage} />
            </div>
          </div>
        </Collapsible>
        <Collapsible trigger="Entertainment">
          <div className='flex flex-row justify-between'>
            <div>
              <p>
              Kilburn Mill Entertainment includes The Nightstage Performance Center, The Acoustic Cafe at The Cove, The Comedy Connection and Ted X Talks. We feature regional to national acts along with a Rooftop Deck for outdoor performances.
              </p>
              <p className='text-red-600 font-bold'><NavLink to='/entertainment' className='hero-btn'><u>learn more</u></NavLink></p>
            </div>
            <div className='pr-12'>
              <img className='tab-image' src={EntertainmentImage} />
            </div>
          </div>
        </Collapsible>
        <Collapsible trigger="Isolation Contemplations Gallery">
          <div className='flex flex-row justify-between'>
            <div>
              <p>
                View Kilburn Mill's Virtual Isolation Contemplations Gallery, a People's Choice Award vote!
              </p>
              <div>
                <p className='text-white font-bold'><NavLink to='/entertainment' className='hero-btn'><u>view jurors statement</u></NavLink></p>
                <p className='text-red-600 font-bold'><NavLink to='/entertainment' className='hero-btn'><u>learn more</u></NavLink></p>
              </div>
            </div>
            <div className='pr-12'>
              <img className='tab-image' src={IsolationImage} />
            </div>
          </div>
        </Collapsible>
        <Collapsible trigger="History of the Mill">
          <div className='flex flex-row justify-between'>
            <div>
              <p>
              Built in 1903, the Kilburn Mill was 
              one of the premiere cotton and textile 
              mills in New Bedford. <br />
              <br />
              It was expanded in 1910 to the current 3 
              building complex.<br />
              <br />
              Boasting one of the city’s most beautiful 
              views — overlooking Clark’s Cove at the 
              beginning of what is called New Bedford’s 
              peninsula.<br />
              <br />
              New Bedford’s 70 textile mills made it the 
              richest city per person in the world — for a 
              second time after whaling. 
              </p>
              <p className='text-red-600 font-bold'><NavLink to='/entertainment' className='hero-btn'><u>learn more</u></NavLink></p>
            </div>
            <div className='pr-12'>
              <img className='tab-image' src={EntertainmentImage} />
            </div>
          </div>
        </Collapsible>
      </div>
      
      <div className='connect pt-16 pb-16 flex flex-col justify-center text-center'>
        <div className='contact flex flex-col text-center'>
        <h2 className='text-center'>STAY CONNECTED</h2>
        <p className='text-center'>Register for our newsletter to stay updated on the latest upcoming events!</p>
        <form ref={form} onSubmit={sendEmail}>
          <input className={`focus:outline-none`} placeholder="Your email, please..." required type="email" name="user_email" />
          <input className="submit-btn" type="submit" value="SUBMIT" />
        </form>
        </div>
      </div>
    </div>
  )
}

export default Home