{/* Les documentations pour plus de fonctionnalités */}
https://reactjs.org/docs/					// Site officiel de REACT
https://github.com/enaqx/awesome-react		// Referentiel GitHub (tres bien fait)
{/*-------------------------------------------------------*/}
{/* Injection de code HTML (en dernier recours) */}
function createMarkup() {
  return { __html: 'First &middot; Second' }
}
function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />
}
{/*-------------------------------------------------------*/}
{/* Valeurs par défaut */}
function MyCoolComponent({ l10n, name, required, value }) {
  // …
}
MyCoolComponent.defaultProps = {
  l10n: true,
  required: false,
}
{/*-------------------------------------------------------*/}
{/* Les classes */}
class Person {
  constructor(first, last) {
    this.first = first
    this.last = last
  }

  fullName() {
    return `${this.first} ${this.last}`
  }
}
{/* Les classes héritées + propTypes */}
class CoolComponent extends Component {
  
  static defaultProps = {
    initialCollapsed: false,
  }

  static propTypes = {
    initialCollapsed: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(CoolItemPropType).isRequired,
  }
  
  constructor(props) {
    super(props)
    this.state = { collapsed: props.initialCollapsed }
  }

  render() {
    // …
  }
}
{/*-------------------------------------------------------*/}
{/* Les champs contrôlés */}
{/*----------------------*/}
{/* num telephone */}
class FrenchPhoneField extends Component {
  static defaultProps = {
    name: 'tel',
    placeholder: '0x xx xx xx xx',
    required: false,
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  // This method is declared using an arrow function initializer solely
  // to guarantee its binding, as we cannot use decorators just yet.
  handleChange = ({ target: { value } }) => {
    value = value
      // Remove all non-digits, turn initial 33 into nothing
      .replace(/\D+/, '')
      .replace(/^330?/, '0')
      // Stick to first 10, ignore later digits
      .slice(0, 10)
      // Add a space after any 2-digit group followed by more digits
      .replace(/(\d{2})(?=\d)/g, '$1 ')
    this.setState({ value })
  }

  render() {
    const { name, placeholder, required } = this.props
    return (
      <input
        autocomplete="tel"
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        required={required}
        type="tel"
        value={this.state.value}
      />
    )
  }
}
{/*----------------------*/}
{/* num carte bancaire */}
class CreditCardField extends Component {
  static defaultProps = {
    name: 'cc-number',
    placeholder: 'xxxx xxxx xxxx xxxx',
    required: false,
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  // This method is declared using an arrow function initializer solely
  // to guarantee its binding, as we cannot use decorators just yet.
  handleChange = ({ target: { value } }) => {
    value = value
      // Remove all non-digits
      .replace(/\D+/, '')
      // Stick to first 16, ignore later digits
      .slice(0, 16)
      // Add a space after any 4-digit group followed by more digits
      .replace(/(\d{4})(?=\d)/g, '$1 ')
    this.setState({ value })
  }

  render() {
    const { name, placeholder, required } = this.props
    return (
      <input
        autocomplete="cc-number"
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        required={required}
        type="text"
        value={this.state.value}
      />
    )
  }
}
{/*-------------------------------------------------------*/}
{/* Les tests */}

{/* Jest et assertions / Chai bibli d'assertions facile et vastes */}
{/* Voir les fichiers se finissant par spec.js ou test.js */}
{/* ou revoir les 3 premieres sous-parties de la derniere partie du cours OpenClassrooms */}

{/* Enzyme (AirBnB) */}
{/* Sinon */}

{/*------Documentation------*/}
{/* https://airbnb.io/enzyme/ */}
{/* https://egghead.io/courses/react-testing-cookbook */}












