import { renderTheme } from '@/styles/theme-render'
import { SearchInput } from '.'

const onChange = jest.fn()

describe('search input ->', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <SearchInput
        placeholder="Procurando por algo específico?"
        onChange={onChange}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <SearchInput
        placeholder="Procurando por algo específico?"
        onChange={onChange}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
