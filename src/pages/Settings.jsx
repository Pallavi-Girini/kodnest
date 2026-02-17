import './Page.css'
import './Settings.css'

const Settings = () => {
  return (
    <div className="page">
      <div className="settings-content">
        <h1 className="page-heading">Settings</h1>
        
        <div className="settings-form">
          <div className="form-group">
            <label className="form-label">Role keywords</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g., Software Engineer, Product Manager"
              disabled
            />
          </div>

          <div className="form-group">
            <label className="form-label">Preferred locations</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="e.g., San Francisco, New York, Remote"
              disabled
            />
          </div>

          <div className="form-group">
            <label className="form-label">Mode</label>
            <select className="form-select" disabled>
              <option value="">Select mode</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
              <option value="onsite">Onsite</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Experience level</label>
            <select className="form-select" disabled>
              <option value="">Select experience level</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior</option>
              <option value="lead">Lead</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
