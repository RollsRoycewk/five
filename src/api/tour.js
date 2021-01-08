import request from "@utils/request";

export const reqCitysList = () => {
    return request({
        method: "GET",
        url: "/getCitysData"
    })
}
// export const reqCitysList = () => {
//     return request({
//         method: "GET",
//         url: "/getCitysData"
//     })
// }