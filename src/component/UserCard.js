import React from 'react'
import  "./UserCard.css";

function UserCard({ user }) {
    return (
        <div className="container">
            <div className="card">
                <img src="https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no" alt="Person" className="card__image"/>
                    <p className="card__name">{user.name}</p>
                    </div>
                    
                    <div className="grid-container">
                        {user.email}

                        <div className="grid-child-posts">
                            {user.id}
      </div>

                        <div className="grid-child-followers">
                            {user.username}
      </div>

                    </div>
                    <div>
                    <ul className="social-icons">
                        <li><i className="fa fa-instagram"></i></li>
                        <li><i className="fa fa-twitter"></i></li>
                        <li><i className="fa fa-linkedin"></i></li>
                        <li><i className="fa fa-codepen"></i></li>
                    </ul>
                    <button className="btn draw-border">Follow</button>
                    <button className="btn draw-border">Message</button></div></div>
  )}


export default UserCard
