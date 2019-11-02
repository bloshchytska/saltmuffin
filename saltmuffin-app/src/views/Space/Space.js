import React, {Component} from 'react';
import BWLayout from "../../components/BWLayout/BWLayout";
import GridLayout from "../../components/GridLayout/GridLayout";
import './Space.scss';
import GridItem from "../../components/GridLayout/GridItem/GridItem";

class Space extends Component {

    SPACE_ASSETS_API_Path = "https://api.github.com/repositories/201742171/contents/saltmuffin-app/src/assets/";

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }


    fetchImages(assetsPath) {
        fetch(assetsPath)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }

    componentDidMount() {
        // dino
        // sputnik
        // paintings
        // ink
        // digital art
        // collage
        this.fetchImages(this.SPACE_ASSETS_API_Path + "dino");
        this.fetchImages(this.SPACE_ASSETS_API_Path + "sputnik");
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return (
                <BWLayout>
                    <GridLayout>
                        Error: {error.message}
                    </GridLayout>
                </BWLayout>
            )

        } else if (!isLoaded) {
            return (
                <BWLayout>
                    <GridLayout>
                       Loading ...
                    </GridLayout>
                </BWLayout>
            )
        } else {
            return (
                <BWLayout>
                    <GridLayout>
                        {items.map(item => (
                            <GridItem key={item.name} image={item.download_url}/>
                        ))}
                    </GridLayout>
                </BWLayout>
            );
        }
    }
}



export default Space;
