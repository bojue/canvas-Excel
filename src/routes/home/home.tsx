import * as React from 'react';
import { Props } from 'react';
import "./home.scss";
import Excel from '../excel/comps/sheet';
class Home extends React.Component<{}, object>  {
    render() {
        return <div><Excel/></div>
    }
}

export default Home;