import React from 'react';

const Notifications = () => {
    return (
        <div>
            <h1>Email notifications</h1>
            <p>Story recommendations</p>
            <div className='flex justify-between'>
                <div>
                <h1>Medium Digest</h1>
                <p>The best stories on Medium personalized based on your interests, as well as outstanding stories selected by our editors.</p>
                </div>
                <select className="select select-sm text-green-600">
  <option  selected>Daily</option>
  <option>Weekly</option>
  <option>Monthly</option>
</select>
            </div>
            {/* <div>
                <div>
                <h1>Recommended reading</h1>
                <p>Featured stories, columns, and collections that we think you’ll enjoy based on your reading history.</p>
                </div>
            </div> */}
<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text"><h1>Recommended reading</h1>
                <p>Featured stories, columns, and collections that we think you’ll enjoy based on your reading history.</p></span>
    <input type="checkbox" checked className="checkbox checkbox-success" />
  </label>
            </div>
            <div className="divider"></div>
<h1>From writers and publications</h1>
<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">New stories from writers you’ve subscribed to</span>
    <input type="checkbox" checked className="checkbox checkbox-success" />
  </label>
</div>
<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Digests from publications you follow</span>
    <input type="checkbox" checked className="checkbox checkbox-success" />
  </label>
</div>
<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Newsletters from publications</span>
    <input type="checkbox" checked className="checkbox checkbox-success" />
  </label>
            </div> 
            <div className="divider"></div>
<h1>From writers and publications</h1>
<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">New stories from writers you’ve subscribed to</span>
    <input type="checkbox" checked className="checkbox checkbox-success" />
  </label>
</div>
<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Digests from publications you follow</span>
    <input type="checkbox" checked className="checkbox checkbox-success" />
  </label>
</div>
<div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Newsletters from publications</span>
    <input type="checkbox" checked className="checkbox checkbox-success" />
  </label>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Notifications;