export default function PopoverTrigger({ _onTrigger, children }) {
    return (
        <div onClick={_onTrigger}>
            {children}
        </div>
    )
}