import React, {Component} from 'react';
import BWLayout from "../../components/BWLayout/BWLayout";
import GridLayout from "../../components/GridLayout/GridLayout";
import GridItem from "../../components/GridLayout/GridItem/GridItem";
import './Space.scss';
import SpaceImageLoader from "./Space-images";

class Space extends Component {
    componentDidMount() {

        SpaceImageLoader();
    }
    render() {
       return (
           <BWLayout>
               <GridLayout>

               </GridLayout>
           </BWLayout>
       );
    }
};

export default Space;
