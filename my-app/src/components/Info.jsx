import declarative from "../images/icon1.png";
import components from "../images/icon2.png";
import singleWay from "../images/icon3.png";
import last from "../images/icon4.png";
import "../components/Info.css"

export default function Info(props){
    return (
        <div className="info">
        <div className="declarative">
            <img src={declarative} alt="declarative" className="declarative"/>
            <h4>Declarative</h4>
            <p>React makes it <br/>painless to create <br/>interactive UIs.</p>
        </div>
        <div className="components">
            <img src={components} alt="components" className="components"/>
            <h4>Components</h4>
            <p>Build encapsulated <br/>components that <br/>manage their state.</p>
        </div>
        <div className="singleWay">
            <img src={singleWay} alt="singleWay" className="singleWay"/>
            <h4>Single-Way</h4>
            <p>A set of immutable <br/>values are passed to <br/>the component's.</p>
        </div>
        <div className="last">
            <img src={last} alt="JSX" className="JSX"/>
            <h4>JSX</h4>
            <p>Statically-typed, <br/>designed to run on <br/>modern browsers.</p>
        </div>
        </div>
    );   
   }