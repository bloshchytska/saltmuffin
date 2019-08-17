import React, {Component} from 'react';
import Sky from "../../components/Sky/Sky";
import './Salt.scss';
import BWLayout from "../../components/BWLayout/BWLayout";
class Salt extends Component {
    render() {
        return(
            <div className="salt">
                <div className="salt-sky">
                    <Sky/>
                </div>
                <BWLayout>
                    <div className="iframe-wrapper">
                        <iframe
                            title="b1-sticker"
                            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkirikia%2Fposts%2F10211190677602011&width=500"
                            scrolling="no" frameBorder="0"
                            allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                </BWLayout>
            </div>
        )
    }
}

export default Salt;
