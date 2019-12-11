import React, { Component } from 'react';
import loadData from '../../utils/loadData';

class ActiveMembers extends Component {
    state = {
        members: []
};

async componentDidMount() {
        const data = await loadData(
            `http://localhost:3333/member`
            ); 
            const members = data;

        this.setState({
            members
        })
        }

    render() {
        const { members } = this.state;
        return(
          <>
            <div className="dashMembers">
            <h1>Members</h1>
            <form>
            <table border="1|0">
              <thead>
              <tr>
                <th>
                    Name
                </th>
                <th>
                    Status
                </th>
              </tr>
              </thead>
              
              <tbody>
                {members.map(m => m.status === "active" ?
                <tr key={m.id} value={m.id} name={m.id}>
                  <td>{m.name}</td> 
                  <td>{m.status}</td>
                  </tr>
                  : null)}
                  </tbody>
            </table>
            </form>
            </div>
            </>
        );
    }
}

export default ActiveMembers;