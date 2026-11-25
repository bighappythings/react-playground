import { Link } from "react-router-dom";

const ComponentList = () => {
    return (
        <div className="main">
            <h1 className="h1">React Playground</h1>
            <p className="b1">A series of projects built using a shared css style guide library - all using React & TypeScript as their foundation</p>
            <div className="components-row">

                {/* counter project */}
                <Link to="/counter" className="components-col bg-red c-white">
                    <h2 className="h2">Counter</h2>
                    <p className="b1">Basic counter with configuration to increment, decrement and reset the value</p>
                </Link>

                {/* calculator project */}
                <Link to="/calculator" className="components-col bg-blue c-white">
                    <h2 className="h2">Calculator</h2>
                    <p>Basic calculator with operators and ability to clear previous entries.</p>
                </Link>

                <Link to="/quiz" className="components-col bg-green c-white">
                    <h2 className="h2">Quiz Project</h2>
                    <p>General knowledge quiz.</p>
                </Link>
                 
                <div className="components-col bg-yellow">
                    <h2 className="h2">Project 4</h2>
                    <p>big old test</p>
                </div>    
            </div>
        </div>
    );
};

export default ComponentList;