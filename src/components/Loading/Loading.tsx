

interface Props {
    loading: boolean,
    children: JSX.Element
}

const Loading: React.FC<Props> = ({loading, children})  => {


    if (loading) return <div>{loading && <div>Loading...</div>}</div>;

    return (
        <div>
            {children}
        </div>
        )
       
     ;
}

export default Loading;