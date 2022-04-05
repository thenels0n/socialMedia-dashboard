import React from 'react'
import { BsFillCaretUpFill, BsFillCaretDownFill, BsInstagram } from "react-icons/bs";
import { TiSocialYoutube, TiSocialTwitter } from "react-icons/ti";
import { AiFillFacebook } from "react-icons/ai";


export default function Followers(props) { 
    return ( 

        <div className='followers'>
            <div className="container">
                <div className="followers-container facebook" style={{backgroundColor: props.bg}}>
                    <div className="card-social">
                        <AiFillFacebook className='social-icons facebook-icon'/>
                        <h5 className='blue-font'>@nathanf</h5>
                    </div>
                    <h1 className='white-font' style={{color: props.color}}>1987</h1>
                    <h4 className='blue-font'>F&nbsp;o&nbsp;l&nbsp;l&nbsp;o&nbsp;w&nbsp;e&nbsp;r&nbsp;s</h4>
                    <h6 className='green-font'><BsFillCaretUpFill className='side-font green-font' />12 Today</h6>
                </div>

                <div className="followers-container twitter"style={{backgroundColor: props.bg}}>
                    <div className="card-social">
                        <TiSocialTwitter className='social-icons twitter-icon' /> 
                        <h5 className='blue-font'>@nathanf</h5>
                    </div>
                    <h1 className='white-font' style={{color: props.color}}>1044</h1>
                    <h4 className='blue-font'>F&nbsp;o&nbsp;l&nbsp;l&nbsp;o&nbsp;w&nbsp;e&nbsp;r&nbsp;s</h4>
                    <h6 className='green-font'><BsFillCaretUpFill className='side-font green-font' />99 Today</h6>
                </div>

                <div className="followers-container instagram"  style={{backgroundColor: props.bg}}>
                    <div className="card-social">
                        <BsInstagram className='social-icons instagram-icon' /> 
                        <h5 className='blue-font'>@nathanf</h5>
                    </div>
                    <h1 className='white-font' style={{color: props.color}}>11k</h1>
                    <h4 className='blue-font'>F&nbsp;o&nbsp;l&nbsp;l&nbsp;o&nbsp;w&nbsp;e&nbsp;r&nbsp;s</h4>
                    <h6 className='green-font'><BsFillCaretUpFill className='side-font green-font' />1099 Today</h6>
                </div>

                <div className="followers-container youtube"  style={{backgroundColor: props.bg}}>
                    <div className="card-social">
                        <TiSocialYoutube className='social-icons youtube-icon' /> 
                        <h5 className='blue-font'>@nathanf</h5>
                    </div>                    
                    <h1 className='white-font' style={{color: props.color}}>8239</h1>
                    <h4 className='blue-font'>F&nbsp;o&nbsp;l&nbsp;l&nbsp;o&nbsp;w&nbsp;e&nbsp;r&nbsp;s</h4>
                    <h6 className='red-font'><BsFillCaretDownFill className='side-font red-font' />144 Today</h6>
                </div>
            </div>
        </div>
    )
}