import { Button, Input, SocialButton } from "components"
import { paths } from "core"
import { FC } from "react"
import { Link } from "react-router-dom"
import { IResolveParams, LoginSocialFacebook, LoginSocialGoogle } from "reactjs-social-login"

interface IProps {
    form?: 'login' | 'register'
}

const Auth: FC<IProps> = ({ form }) => {
    const formTitle = form[0].toUpperCase() + form.slice(1)
    const pathName = form === 'login' ? 'register' : 'login'
    const formName = pathName[0].toUpperCase() + pathName.slice(1)
    const onLogoutSuccess = () => {
        console.log('test LOGOUT')
    }
    const onLoginStart = () => {
        console.log('test LOGIN')
    }

    // const onResolve = ({ provider, data }: IResolveParams) => {
    //     console.log('provider', provider)
    //     console.log('data', data)
    //     // setProvider(provider)
    //     // setProfile(data)
    // }
    // const onReject = err => {
    //     console.log(err)
    // }
    return (
        <div className="auth">
            <form className="form">
                <h2>{formTitle }</h2>
                <div className="form-group">
                    {
                        form === 'register' 
                            && <Input type='text' id='full_name' placeholder='Full Name' />
                    }
                    {
                        form === 'register' 
                            && <Input type='text' id='discord_id' placeholder='Discord ID' />
                    }

                    <Input type='email' id='email' placeholder='E-Mail' />
                    <Input type='password' autoComplete='off' id='password' placeholder='Password' />
                    
                    {
                        form === 'register' 
                            && <Input type='password' autoComplete='off' id='confirm_password' placeholder='Confirm password' />
                    }

                </div>
                <Button text={form === 'register' ? 'Create Account' : 'Login'} onClick={() => console.log(form === 'register' ? 'Create Account' : 'Login')} />
                
                {
                    form === 'login' 
                        && <>
                            <SocialButton 
                                provider='facebook'
                                text={'Continue with Facebook'}
                                onLogoutSuccess={onLogoutSuccess}
                                onLoginStart={onLoginStart}
                            />
                            <SocialButton 
                                provider='google'
                                text={'Continue with Google'}
                                onLogoutSuccess={onLogoutSuccess}
                                onLoginStart={onLoginStart}
                            />
                        </>
                }
                
                <footer className="footer">
                    <Link to={paths[pathName]} className="link">{formName}</Link>
                </footer>
            </form>
        </div>
    )
}


Auth.defaultProps = {
    form: 'login',
}
export default Auth