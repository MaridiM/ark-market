import { FacebookSVG, GoogleSVG } from "./icons"
import { Button } from "components"
import { FC, ReactNode } from "react"
import { LoginSocialFacebook, LoginSocialGoogle, IResolveParams } from "reactjs-social-login"
import { SocialProviders } from "./types"

interface Props {
    provider: SocialProviders
    scope?: string
    redirect_uri?: string
    onLoginStart?: () => void
    onLogoutSuccess?: () => void
    className?: string
    icon?: boolean
    text?: string
    children?: ReactNode
}

const SocialButton: FC<Props> = ({ redirect_uri, children,  className, onLogoutSuccess, onLoginStart, scope, provider, icon, text }) => {
    // Default Scopes
    const facebookScope = 'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
    const googleScope = 'openid profile email'

    const facebookBool = provider === 'facebook'
    const googleBool = provider === 'google'

    // Set Component
    const Component = facebookBool ? LoginSocialFacebook : googleBool && LoginSocialGoogle
    const Icon = facebookBool ? FacebookSVG : googleBool && GoogleSVG

    // Methods
    const onResolve = ({ provider, data }: IResolveParams) => {
        console.log('provider', provider)
        console.log('data', data)
        // setProvider(provider)
        // setProfile(data)
    }
    const onReject = err => {
        console.log(err)
    }


    return (
        <Button className={`btn-${provider} ${className}`} social >
            <Component
                // For Facebook
                appId={facebookBool ? process.env.REACT_APP_FACEBOOK_APP_ID || '' : ''}
                version={facebookBool ? process.env.REACT_APP_FACEBOOK_APP_VERSION || '' : null}
                fieldsProfile={facebookBool ? scope || facebookScope : null}
                onLogoutSuccess={facebookBool ? onLogoutSuccess : null}

                // For Google
                client_id={googleBool ? process.env.REACT_APP_GOOGLE_CLIENT_ID || '' : ''}
                scope={googleBool ? scope || googleScope : null}
                discoveryDocs={googleBool ? 'claims_supported' : null}
                access_type={googleBool ? 'offline' : null}

                onLoginStart={onLoginStart}
                redirect_uri={redirect_uri}
                onResolve={onResolve}
                onReject={onReject}

                className={`btn-content`}
            >
                { text.length ? text : children }
                { icon && <Icon className='btn-icon' /> }
            </Component>
        </Button>
    )
}

SocialButton.defaultProps = {
    icon: false,
    className: '',
}

export default SocialButton
