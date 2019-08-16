import React, {Component} from 'react';
import Sky from "../../components/Sky/Sky";
import './Salt.scss';
import BWLayout from "../../components/BWLayout/BWLayout";
class Salt extends Component {
    render() {
        return(
            <div className="salt">
                <div>
                    <Sky/>
                </div>
                <BWLayout>
                    <br/>
                </BWLayout>
            </div>
        )
    }
}

export default Salt;
