import './Navbar.css';

const NavBar = () => {
    return <div className="navbar">
        <div>타이틀</div>
        <div>
        <input type="text" className='custom_input'></input>
            <button type='submit'>검색</button>
            
        </div>
        <div>
            <button>다크모드</button>
            <button>마이페이지</button>
        </div>

    </div>
};

export default NavBar;