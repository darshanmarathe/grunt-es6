import { dom, memoize } from "../mact/index.js";

const HOC = (props) => {
    //const { component } = props;

    let tooltip = null
    console.log(props, "HOC")
    const ShowPopup = (e) => {
        e.preventDefault();
        if (tooltip == null) {

            tooltip = $("#" + props.id).tooltip({
                items: "#" + props.id,
                content: function () {
                    return <div>

                        <props.component {...props} />
                        {/* {props.component} */}
                    </div>
                }
            }
            );
        }
        tooltip.tooltip("open");
    };
    return (
        <div id={props.id} onClick={(e) => ShowPopup(e)} >
            {props.children}

        </div>
    )
}

const UserComponent = (props) => {
    let Data = [];
    let id = "UC" + Math.random();
    if (Data.length === 0) {
        $.ajax({

            url: 'http://localhost:3000/users/',
            dataType: 'json',
            success: function (data) {
                Data = data;
                setTimeout(() => {
                    console.log($('#' + id).length, Data.length)
                    $('#' + id).html(Data.length)
                }, 1000);
            }
        });
    }

    return (
        <div id={id}>Loading....</div>
    )

}

export { HOC, UserComponent };