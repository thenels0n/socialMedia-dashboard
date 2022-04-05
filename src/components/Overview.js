import React from 'react'
import { BsFillCaretUpFill, BsFillCaretDownFill, BsInstagram } from "react-icons/bs";
import { TiSocialYoutube, TiSocialTwitter } from "react-icons/ti";
import { AiFillFacebook } from "react-icons/ai";



const Overview = (props) => {
  return (
    <div className='overview-grid'>
        <h2 style={{color: props.titleColor}}>Overview -Today</h2>
        <div className="containerr">

            <div className="overview" style={{backgroundColor: props.bg}}>
                <div className="overview-header">
                    <h4 className='blue-font overview-title'>Page views</h4>
                    <AiFillFacebook className='social-icons facebook-icon'/>
                </div>
                <div className="overview-body">
                    <h6 className='overview-body-big-text' style={{color: props.color}}>87</h6>
                    <h6 className='green-font'><BsFillCaretUpFill className='side-font green-font' />3%</h6>
                </div>
            </div>

            <div className="overview" style={{backgroundColor: props.bg}}>
                <div className="overview-header">
                    <h4 className='blue-font overview-title'>Likes</h4>
                    <AiFillFacebook className='social-icons facebook-icon'/>
                </div>
                <div className="overview-body">
                    <h6 className='overview-body-big-text' style={{color: props.color}}>52</h6>
                    <h6 className='red-font'><BsFillCaretDownFill className='side-font red-font' />3%</h6>
                </div>
            </div>

            <div className="overview" style={{backgroundColor: props.bg}}>
                <div className="overview-header">
                    <h4 className='blue-font overview-title'>Likes</h4>
                    <BsInstagram className='social-icons facebook-icon'/>
                </div>
                <div className="overview-body">
                    <h6 className='overview-body-big-text' style={{color: props.color}}>5462</h6>
                    <h6 className='green-font'><BsFillCaretUpFill className='side-font green-font' />2257%</h6>
                </div>
            </div>

            <div className="overview" style={{backgroundColor: props.bg}}>
                <div className="overview-header">
                    <h4 className='blue-font overview-title'>Profile Views</h4>
                    <BsInstagram className='social-icons facebook-icon'/>
                </div>
                <div className="overview-body">
                    <h6 className='overview-body-big-text' style={{color: props.color}}>52k</h6>
                    <h6 className='green-font'><BsFillCaretUpFill className='side-font green-font' />2257%</h6>
                </div>
            </div>

            <div className="overview" style={{backgroundColor: props.bg}}>
                <div className="overview-header">
                    <h4 className='blue-font overview-title'>Retweets</h4>
                    <TiSocialTwitter className='social-icons twitter-icon'/>
                </div>
                <div className="overview-body">
                    <h6 className='overview-body-big-text' style={{color: props.color}}>117</h6>
                    <h6 className='green-font'><BsFillCaretUpFill className='side-font green-font' />303%</h6>
                </div>
            </div>

            <div className="overview" style={{backgroundColor: props.bg}}>
                <div className="overview-header">
                    <h4 className='blue-font overview-title'>Likes</h4>
                    <TiSocialTwitter className='social-icons twitter-icon'/>
                </div>
                <div className="overview-body">
                    <h6 className='overview-body-big-text' style={{color: props.color}}>507</h6>
                    <h6 className='green-font'><BsFillCaretUpFill className='side-font green-font' />553%</h6>
                </div>
            </div>

            <div className="overview" style={{backgroundColor: props.bg}}>
                <div className="overview-header">
                    <h4 className='blue-font overview-title'>Likes</h4>
                    <TiSocialYoutube className='social-icons youtube-icon'/>
                </div>
                <div className="overview-body">
                    <h6 className='overview-body-big-text' style={{color: props.color}}>107</h6>
                    <h6 className='red-font'><BsFillCaretDownFill className='side-font red-font' />19%</h6>
                </div>
            </div>

            <div className="overview" style={{backgroundColor: props.bg}}>
                <div className="overview-header">
                    <h4 className='blue-font overview-title'>Total Views</h4>
                    <TiSocialYoutube className='social-icons youtube-icon'/>
                </div>
                <div className="overview-body">
                    <h6 className='overview-body-big-text' style={{color: props.color}}>1407</h6>
                    <h6 className='red-font'><BsFillCaretDownFill className='side-font red-font' />12%</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview