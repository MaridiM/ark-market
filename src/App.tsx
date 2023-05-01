import { Routes, Route } from 'react-router-dom'
import { paths } from 'core'
import { Auth } from 'pages'

const App = () => {
    return (
        <div className='app'>
            <Routes>
                {/* AUTH LINKS */}
                <Route path={paths.main} element={<Auth />} />
                <Route path={paths.login} element={<Auth form='login' />} />
                <Route path={paths.register} element={<Auth form='register' />} />
            </Routes>
        </div>
    )
}

export default App