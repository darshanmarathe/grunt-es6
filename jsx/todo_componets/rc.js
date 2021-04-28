//Render check
function rc(obj, avoidDefault = false) {
    if (obj === null) return false;
    switch (typeof obj) {
        case "undefined":
            return false;
        case "string":
            if (avoidDefault) {
                if (obj === "") return false;
                else return true;
            } else {
                return true;
            }
            break;
        case "boolean":
            return obj;
        case "number":
            if (avoidDefault) {
                if (obj === parseInt(0)) return false;
                else return true;
            } else {
                return true;
            }
            break;;
        case 'object':
            if (avoidDefault) {
                if (Array.isArray(obj)) {
                    if (obj.length === 0) return false;
                    else return true;
                }
                if (Object.keys(obj).length === 0) return false;
                else return true;
            } else {
                return true;
            }
            break;;

        default:
            break;
    }
}

//must have props
function mh(obj, ...params) {
    for (const key of params) {
        if (obj[key] === undefined) {
            return false;
        }
    }
    return true;
}

export {
    rc,
    mh
}