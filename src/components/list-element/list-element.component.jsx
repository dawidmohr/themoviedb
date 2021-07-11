const ListElement = ({ children, ...prop }) => {
    return (
        <div className="border border-primary p-2">{children}</div>
    )
}

export default ListElement;
