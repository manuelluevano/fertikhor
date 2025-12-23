import logo from '../assets/FertiKhor_logo.svg'

const BrandLogo = ({ className = '', ...props }) => (
  <img src={logo} alt="Ferti Khor" className={`h-16 object-contain ${className}`} {...props} />
)

export default BrandLogo
