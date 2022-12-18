import { renderTheme } from '@/styles/theme-render'
import { IconButton, Badge } from '.'

const Icon = () => <div />

describe('icon button ->', () => {
  it('should render', () => {
    const { container } = renderTheme(
      <IconButton ariaLabel="Icon Button" Icon={<Icon />} />
    )
    expect(container).toBeInTheDocument()
  })

  it('should render with label', () => {
    const { getByText } = renderTheme(
      <IconButton ariaLabel="Icon Button" Icon={<Icon />} />
    )
    const button = getByText('Icon Button')
    expect(button).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <IconButton ariaLabel="Icon Button" Icon={<Icon />} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should show badge if provides component', () => {
    const { getByTestId } = renderTheme(
      <IconButton ariaLabel="Icon Button" Icon={<Icon />}>
        <Badge>1</Badge>
      </IconButton>
    )
    const badge = getByTestId('badge')
    expect(badge).toBeInTheDocument()
  })
})
