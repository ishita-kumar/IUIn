 <div>             
   <form className='form' onSubmit ={this.onSubmit}>
      <div className="form-group">
    <input type ='text' value={this.state.searchme} placeholder='please search as name or type' name='searchme' onChange ={this.searchh}/>
    </div>
        <input type ='submit'className='button1' value='Send'></input>
        </form>
        <div>
              <p className ="myp"> categories:</p>
              <select value={this.state.type} name='type' onChange={this.searchfilter1}>
          <option value='music'>Music</option>
          <option value='sport'>Sports</option>
          <option value='sport'>Movies</option>
          <option value='sport'>Food and Drinks</option>
         
        </select>
             
            </div>
            <div>
            <p className ="myp"> location:</p>
              <select value={this.state.location} name='location' onChange={this.searchfilter2}>
          <option value='Bloomington'>Bloomington</option>
          <option value='Indianapolis'>Indianapolis</option>
         
        </select>
            </div>
            <div>
            <p className ="myp"> age:</p>
              <select value={this.state.age} name='age' onChange={this.searchfilter3}>
          <option value='all age'>No Restriction</option>
          <option value='over 21'>over 21</option>
         
        </select>
            </div>
      <div>
        <h3>Logged Events</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    
    </div>