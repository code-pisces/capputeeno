import { renderTheme } from '@/styles/theme-render'
import { Header } from '.'

describe('header ->', () => {
  it('should render', () => {
    const { container } = renderTheme(<Header />)
    expect(container).toBeInTheDocument()
  })

  it('should render the logo', () => {
    const { getByAltText } = renderTheme(<Header />)
    const logo = getByAltText(/logo/i)
    expect(logo).toBeInTheDocument()
  })

  it('should render the search input', () => {
    const { getByPlaceholderText } = renderTheme(<Header />)
    const input = getByPlaceholderText('Procurando por algo específico?')
    expect(input).toBeInTheDocument()
  })

  it('should render the cart icon', () => {
    const { getByText } = renderTheme(<Header />)
    const cartButton = getByText(/carrinho de compras/i)
    expect(cartButton).toBeInTheDocument()
  })
})
