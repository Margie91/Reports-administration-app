import React from 'react';
import placeholder from '../assets/images/person-placeholder.jpg'

class CandidateComponent extends React.Component {
  

    selectCandidate = (event) => {
        event.stopPropagation();

        const candidateName = event.target.dataset.name;
        const candidateId = event.target.dataset.id;
        const selectededCandidate = {
            "name": candidateName,
            "id": candidateId
        }

        this.props.getCandidate(selectededCandidate);

    }


    render() {

        let { avatar, email, name, id } = this.props.candidate;

        if (!avatar) {
            avatar = placeholder;
        }


        return (
            <div className="row" onClick={this.selectCandidate} data-id={id} data-name={name} >
                <div className="col-12 candidateCard" onClick={this.selectCandidate} data-id={id} data-name={name}>
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12" onClick={this.selectCandidate} data-id={id} data-name={name}>
                            <img src={avatar} alt="avatar" onClick={this.selectCandidate} data-id={id} data-name={name} />
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 cand-data" onClick={this.selectCandidate} data-id={id} data-name={name}>
                            <h4 onClick={this.selectCandidate} data-id={id} data-name={name}>{name}</h4>
                            <p onClick={this.selectCandidate} data-id={id} data-name={name}>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CandidateComponent;