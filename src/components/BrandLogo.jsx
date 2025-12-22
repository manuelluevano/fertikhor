import logo from '../assets/logo.svg'

const BrandLogo = ({ className = '', ...props }) => (
  <img src={logo} alt="Ferti Khor" className={`h-10 object-contain ${className}`} {...props} />
)

export default BrandLogo
