
const PageHeader = ({ children, ...props }) => {
  return (
    <h1 {...props}>
      {children}
    </h1>
  )
}

export default PageHeader;
