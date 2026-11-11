import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";

const App = () => {
    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />
            <Main />
            <QuickActions />
            <Footer />
        </div>
    )
}
export default App;