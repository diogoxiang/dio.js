import {
    get
} from '@/http'


// 加载iframe页面
export const getIframe = _url => {
    // return `http://192.168.1.209:81/?Abtester_Forward=Spider&Site=${process.env.VUE_APP_CASEURL}${_url}`
    return `${process.env.VUE_APP_BASEURL}/api/abtest/v1/proxy?Abtester_Forward=Spider&url=${process.env.VUE_APP_CASEURL}${_url}`
    // return get('/api/abtest/v1/proxy', {
    //     Abtester_Forward: 'Spider',
    //     url: process.env.VUE_APP_CASEURL + _url
    // }, false, {
    //     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    //     'x-ab-referer': process.env.VUE_APP_CASEURL// + _url.slice(0, _url.lastIndexOf('/'))
    // })
}