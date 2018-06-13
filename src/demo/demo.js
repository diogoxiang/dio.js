var xml_type;
// branch for native XMLHttpRequest object
if (window.XMLHttpRequest && !(window.ActiveXObject == undefined)) {

    xml_type = 'XMLHttpRequest';

    // branch for IE/Windows ActiveX version
} else if (window.ActiveXObject) {
    try {

        x = new ActiveXObject('Msxml2.XMLHTTP');

        xml_type = 'Msxml2.XMLHTTP';

    } catch (e) {

        x = new ActiveXObject('Microsoft.XMLHTTP');

        xml_type = 'Microsoft.XMLHTTP';

    }

}


var ActualActiveXObject = window.ActiveXObject;
var ActiveXObject;

if (xml_type == 'XMLHttpRequest') {

    (function (open) {
        if (s_ajaxListener === undefined) {

            var s_ajaxListener = new Object();
            s_ajaxListener.tempOpen = XMLHttpRequest.prototype.open;
            s_ajaxListener.tempSend = XMLHttpRequest.prototype.send;
            s_ajaxListener.callback = function () {
                console.log(this.method);
                // this.method :the ajax method used
                // this.url    :the url of the requested script (including query string, if any) (urlencoded)
                // this.data   :the data sent, if any ex: foo=bar&a=b (urlencoded)
            };

            XMLHttpRequest.prototype.open = function (a, b) {
                if (!a) a = '';
                if (!b) b = '';

                s_ajaxListener.tempOpen.apply(this, arguments);
                s_ajaxListener.method = a;
                s_ajaxListener.url = b;

                var xhr = this;
                xhr.openTime = new Date().getTime();

                setRequest(xhr.openTime, a, b);

                if (a.toLowerCase() == 'get') {
                    s_ajaxListener.data = b.split('?');
                    s_ajaxListener.data = s_ajaxListener.data[1];
                }
            };

            XMLHttpRequest.prototype.send = function (a, b) {
                if (!a) a = '';
                if (!b) b = '';
                s_ajaxListener.tempSend.apply(this, arguments);
                if (s_ajaxListener.method.toLowerCase() == 'post') s_ajaxListener.data = a;

                var xhr = this;
                var interval = setInterval(function () {
                    if (xhr.readyState === 4) {
                        setResponse(xhr, a);
                        clearInterval(interval);
                    }
                }, 200);

                s_ajaxListener.callback();
            };

        }
    })(XMLHttpRequest.prototype.open);

} else {

    ActiveXObject = function (progid) {
        console.log("progid ", progid);
        var ax = new ActualActiveXObject(progid);

        if (progid.toLowerCase() == "microsoft.xmlhttp") {
            var o = {
                _ax: ax,
                _status: "fake",
                responseText: "",
                responseXml: null,
                readyState: 0,
                dataType: 'plain',
                status: 0,
                statusText: 0,
                onReadyStateChange: null,
                onreadystatechange: null
            };
            o._onReadyStateChange = function () {
                var self = o;
                return function () {
                    self.readyState = self._ax.readyState;
                    if (self.readyState == 4) {

                        self.responseText = self._ax.responseText;
                        self.responseXml = self._ax.responseXml;
                        self.status = self._ax.status;
                        self.statusText = self._ax.statusText;

                        setResponse(self, self.responseText);

                    }
                    if (self.onReadyStateChange) {
                        self.onReadyStateChange();
                    }
                    if (self.onreadystatechange) {
                        self.onreadystatechange();
                    }
                }
            }();
            o.open = function (bstrMethod, bstrUrl, varAsync, bstrUser, bstrPassword) {
                this._ax.onReadyStateChange = this._onReadyStateChange;
                this._ax.onreadystatechange = this._onReadyStateChange;
                o.openTime = new Date().getTime();
                setRequest(o, bstrMethod, bstrUrl);
                return this._ax.open(bstrMethod, bstrUrl, varAsync, bstrUser, bstrPassword);
            };
            o.send = function (varBody) {
                return this._ax.send(varBody);
            };
            o.abort = function () {
                return this._ax.abort();
            }
            o.setRequestHeader = function (k, v) {
                return this._ax.setRequestHeader(k, v)
            }
            o.setrequestheader = function (k, v) {
                return this._ax.setRequestHeader(k, v)
            }
            o.getResponseHeader = function (k) {
                return this._ax.getResponseHeader(k)
            }
            o.getresponseheader = function (k) {
                return this._ax.getResponseHeader(k)
            }

        } else if (progid.toLowerCase() == "msxml2.xmlhttp") {
            var o = {
                _ax: ax,
                _status: "fake",
                responseText: "",
                responseXml: null,
                readyState: 0,
                dataType: 'plain',
                status: 0,
                statusText: 0,
                onReadyStateChange: null,
                onreadystatechange: null
            };
            o._onReadyStateChange = function () {
                var self = o;
                return function () {
                    self.readyState = self._ax.readyState;
                    if (self.readyState == 4) {

                        self.responseText = self._ax.responseText;
                        self.responseXml = self._ax.responseXml;
                        self.status = self._ax.status;
                        self.statusText = self._ax.statusText;

                    }
                    if (self.onReadyStateChange) {
                        self.onReadyStateChange();
                    }
                    if (self.onreadystatechange) {
                        self.onreadystatechange();
                    }
                }
            }();
            o.open = function (bstrMethod, bstrUrl, varAsync, bstrUser, bstrPassword) {
                this._ax.onReadyStateChange = this._onReadyStateChange;
                this._ax.onreadystatechange = this._onReadyStateChange;
                alert('Intercept');
                return this._ax.open(bstrMethod, bstrUrl, varAsync, bstrUser, bstrPassword);
            };
            o.send = function (varBody) {
                return this._ax.send(varBody);
            };
            o.abort = function () {
                return this._ax.abort();
            }
            o.setRequestHeader = function (k, v) {
                return this._ax.setRequestHeader(k, v)
            }
            o.setrequestheader = function (k, v) {
                return this._ax.setRequestHeader(k, v)
            }
            o.getResponseHeader = function (k) {
                return this._ax.getResponseHeader(k)
            }
            o.getresponseheader = function (k) {
                return this._ax.getResponseHeader(k)
            }

        } else {
            var o = ax;
        }

        return o;
    }
}