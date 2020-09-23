---
title: "ZAP"
path: "scanners/zap"
category: "scanner"
type: "WebApplication"
state: "released"
appVersion: "2.9.0"
usecase: "WebApp & OpenAPI Vulnerability Scanner"
---

![zap logo](https://raw.githubusercontent.com/wiki/zaproxy/zaproxy/images/zap32x32.png)

The OWASP Zed Attack Proxy (ZAP) is one of the world’s most popular free security tools and is actively maintained by hundreds of international volunteers*. It can help you automatically find security vulnerabilities in your web applications while you are developing and testing your applications. Its also a great tool for experienced pentesters to use for manual security testing.

To learn more about the ZAP scanner itself visit [https://www.zaproxy.org/](https://www.zaproxy.org/).

<!-- end -->

## Deployment

The ZAP scanType can be deployed via helm:

```bash
helm upgrade --install zap ./scanners/zap/
```

## Configuration

The following security scan configuration example are based on the ZAP Docker Scan Scripts. By default the secureCodeBox ZAP Helm Chart installs all three ZAP scripts: `zap-baseline`, `zap-full-scan` & `zap-api-scan`. Listed below are the arguments supported by the `zap-baseline` script, which are mostly interchangable with the other ZAP scripts. For a more complete reference check out the [ZAP Documentation](https://www.zaproxy.org/docs/docker/) and the secureCodeBox based ZAP examples listed below.

The command line interface can be used to easily run server scans: `-t www.example.com`

```bash
Usage: zap-baseline.py -t <target> [options]
    -t target         target URL including the protocol, eg https://www.example.com
Options:
    -h                print this help message
    -c config_file    config file to use to INFO, IGNORE or FAIL warnings
    -u config_url     URL of config file to use to INFO, IGNORE or FAIL warnings
    -g gen_file       generate default config file (all rules set to WARN)
    -m mins           the number of minutes to spider for (default 1)
    -r report_html    file to write the full ZAP HTML report
    -w report_md      file to write the full ZAP Wiki (Markdown) report
    -x report_xml     file to write the full ZAP XML report
    -J report_json    file to write the full ZAP JSON document
    -a                include the alpha passive scan rules as well
    -d                show debug messages
    -P                specify listen port
    -D                delay in seconds to wait for passive scanning
    -i                default rules not in the config file to INFO
    -I                do not return failure on warning
    -j                use the Ajax spider in addition to the traditional one
    -l level          minimum level to show: PASS, IGNORE, INFO, WARN or FAIL, use with -s to hide example URLs
    -n context_file   context file which will be loaded prior to spidering the target
    -p progress_file  progress file which specifies issues that are being addressed
    -s                short output format - dont show PASSes or example URLs
    -T                max time in minutes to wait for ZAP to start and the passive scan to run
    -z zap_options    ZAP command line options e.g. -z "-config aaa=bbb -config ccc=ddd"
    --hook            path to python file that define your custom hooks
```



## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="demo-bodgeit-baseline-scan"
  values={[{"label":"Demo-bodgeit-baseline-scan","value":"demo-bodgeit-baseline-scan"},{"label":"Demo-bodgeit-full-scan","value":"demo-bodgeit-full-scan"},{"label":"Demo-juice-shop-baseline-scan","value":"demo-juice-shop-baseline-scan"},{"label":"Demo-juice-shop-full-scan","value":"demo-juice-shop-full-scan"},{"label":"Demo-petstore-api-scan","value":"demo-petstore-api-scan"}]}>
            
            
<TabItem value="demo-bodgeit-baseline-scan">
  
<div>

</div>

<Tabs
defaultValue="sc"
values={[
  {label: 'Scan', value: 'sc'}, 
  {label: 'Findings', value: 'fd'},
]}>


<TabItem value="sc">

```yaml

apiVersion: "execution.experimental.securecodebox.io/v1"
kind: Scan
metadata:
  name: "zap-baseline-bodgeit"
  labels:
    organization: "OWASP"
spec:
  scanType: "zap-baseline"
  parameters:
    # target URL including the protocol
    - "-t"
    - "http://bodgeit.demo-apps.svc:8080"
    # show debug messages
    - "-d"
    # the number of minutes to spider for (default 1)
    - "-m"
    - "2"

```

</TabItem>



<TabItem value="fd">


```yaml

[
    {
        "name": "Content Security Policy (CSP) Header Not Set",
        "description": "Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.",
        "category": "Content Security Policy (CSP) Header Not Set",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "298",
            "zap_solution": "Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: \"Content-Security-Policy\" for Chrome 25+, Firefox 23+ and Safari 7+, \"X-Content-Security-Policy\" for Firefox 4.0+ and Internet Explorer 10+, and \"X-WebKit-CSP\" for Chrome 14+ and Safari 6+.",
            "zap_otherinfo": null,
            "zap_reference": "https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policyhttps://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.htmlhttp://www.w3.org/TR/CSP/http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.htmlhttp://www.html5rocks.com/en/tutorials/security/content-security-policy/http://caniuse.com/#feat=contentsecuritypolicyhttp://content-security-policy.com/",
            "zap_cweid": "16",
            "zap_wascid": "15",
            "zap_riskcode": "1",
            "zap_pluginid": "10038",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/choose.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/valve.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/tagfiles/panel.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/loader.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/connectors.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/HelloWorldSimpleTag.java.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/apr.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/introduction.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/listeners.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "POST"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/class-loader-howto.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestParamExample",
                    "method": "POST"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspx/textRotate.jspx.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/helloworld.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/security-howto.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jasper-howto.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/misc/config.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-interceptor.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/index.html",
                    "method": "GET"
                }
            ]
        },
        "id": "7e32d4f4-97e2-4d72-8aaf-cd3170096b85"
    },
    {
        "name": "X-Frame-Options Header Not Set",
        "description": "X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.",
        "category": "X-Frame-Options Header Not Set",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "280",
            "zap_solution": "Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. ALLOW-FROM allows specific websites to frame the web page in supported web browsers).",
            "zap_otherinfo": null,
            "zap_reference": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options",
            "zap_cweid": "16",
            "zap_wascid": "15",
            "zap_riskcode": "2",
            "zap_pluginid": "10020",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/rewrite.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/mbean-names.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/faq.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/include/include.jsp.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/automatic-deployment.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colors.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/tagfiles/hello.jsp",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute/shuffle.jsp.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/index.xhtml",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/cluster-howto.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/echo.xhtml",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/jts.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/simpletag/foo.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/Functions.java.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/choose.jsp",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/interceptors.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-jndi-realm.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/dates/date.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestHeaderExample",
                    "method": "GET",
                    "param": "X-Frame-Options"
                }
            ]
        },
        "id": "81e0f441-e995-415e-a2fb-3888029538d3"
    },
    {
        "name": "Server Leaks Version Information via \"Server\" HTTP Response Header Field",
        "description": "The web/application server is leaking version information via the \"Server\" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.",
        "category": "Server Leaks Version Information via \"Server\" HTTP Response Header Field",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "337",
            "zap_solution": "Ensure that your web server, application server, load balancer, etc. is configured to suppress the \"Server\" header or provide generic details.",
            "zap_otherinfo": null,
            "zap_reference": "http://httpd.apache.org/docs/current/mod/core.html#servertokenshttp://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspxhttp://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10036",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/filter.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/num/numguess.jsp.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/cal2.jsp.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/index.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/hello.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/book.jsp.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/basic-comparisons.jsp.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/http.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/developers.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/maven-jars.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/service.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/mbeans-descriptors-howto.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/chat.xhtml",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/Host.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.jsp.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/functions.jsp.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute/shuffle.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/foreach.jsp",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-objects.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                }
            ]
        },
        "id": "bbd6f2df-c5b0-4f0e-aeed-11936f32b826"
    },
    {
        "name": "Timestamp Disclosure - Unix",
        "description": "A timestamp was disclosed by the application/web server - Unix",
        "category": "Timestamp Disclosure - Unix",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "51",
            "zap_solution": "Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.",
            "zap_otherinfo": "0000000039, which evaluates to: 1970-01-01 00:00:39",
            "zap_reference": "http://projects.webappsec.org/w/page/13246936/Information%20Leakage",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10096",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000039"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000008"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000014963"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000018373"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.jsp",
                    "method": "GET",
                    "evidence": "20100101"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000018"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000005503"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000026"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000015294"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000016347"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000002280"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000043589"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000015448"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000007734"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000010013"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/manager-howto.html",
                    "method": "GET",
                    "evidence": "46800300"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000005214"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000043442"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000005368"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000301"
                }
            ]
        },
        "id": "322a8f55-aac1-4e2b-8ef5-1da7c9f89497"
    },
    {
        "name": "Reverse Tabnabbing",
        "description": "At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the \"noopener\" and \"noreferrer\" keywords in the \"rel\" attribute, which allows the target page to take control of this page.",
        "category": "Reverse Tabnabbing",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "102",
            "zap_solution": "Do not use a target attribute, or if you have to then also add the attribute: rel=\"noopener noreferrer\".",
            "zap_otherinfo": null,
            "zap_reference": "https://owasp.org/www-community/attacks/Reverse_Tabnabbinghttps://dev.to/ben/the-targetblank-vulnerability-by-examplehttps://mathiasbynens.github.io/rel-noopener/https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c",
            "zap_cweid": null,
            "zap_wascid": null,
            "zap_riskcode": "2",
            "zap_pluginid": "10108",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/class-loader-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/virtual-hosting-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-valve.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/windows-service-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-manager.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/apr.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/connectors.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/security-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-channel.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jasper-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/transport.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/status.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/processes.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/realm.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/index.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/building.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/introduction.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/systemprops.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/membership.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-deployer.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                }
            ]
        },
        "id": "3c92d43d-c321-47bc-a75d-8823cb69a4b9"
    },
    {
        "name": "X-Content-Type-Options Header Missing",
        "description": "The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.",
        "category": "X-Content-Type-Options Header Missing",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "316",
            "zap_solution": "Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.",
            "zap_otherinfo": "This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.At \"High\" threshold this scanner will not alert on client or server error responses.",
            "zap_reference": "http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspxhttps://owasp.org/www-community/Security_Headers",
            "zap_cweid": "16",
            "zap_wascid": "15",
            "zap_riskcode": "1",
            "zap_pluginid": "10021",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/jts.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/automatic-deployment.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/mbean-names.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/include/include.jsp.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/rewrite.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/basic-arithmetic.jsp",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/tomcat.png",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colors.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/images/asf-feather.png",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-apps.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/introduction.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/faq.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/servletapi/index.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/misc/dynamicattrs.jsp.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/building.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute/shuffle.jsp.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/images/code.gif",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-receiver.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/deployer-howto.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                }
            ]
        },
        "id": "8843596f-ab70-4385-ad6d-604677c9014f"
    },
    {
        "name": "Absence of Anti-CSRF Tokens",
        "description": "No Anti-CSRF tokens were found in a HTML submission form.A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.CSRF attacks are effective in a number of situations, including:    * The victim has an active session on the target site.    * The victim is authenticated via HTTP auth on the target site.    * The victim is on the same local network as the target site.CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.",
        "category": "Absence of Anti-CSRF Tokens",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "29",
            "zap_solution": "Phase: Architecture and DesignUse a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.For example, use anti-CSRF packages such as the OWASP CSRFGuard.Phase: ImplementationEnsure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.Phase: Architecture and DesignGenerate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).Note that this can be bypassed using XSS.Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.Note that this can be bypassed using XSS.Use the ESAPI Session Management control.This control includes a component for CSRF.Do not use the GET method for any request that triggers a state change.Phase: ImplementationCheck the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.",
            "zap_otherinfo": "No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret] was found in the following HTML form: [Form 1: \"guess\" ].",
            "zap_reference": "http://projects.webappsec.org/Cross-Site-Request-Forgeryhttp://cwe.mitre.org/data/definitions/352.html",
            "zap_cweid": "352",
            "zap_wascid": "9",
            "zap_riskcode": "1",
            "zap_pluginid": "10202",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/num/numguess.jsp",
                    "method": "GET",
                    "evidence": "<form method=get>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample?dataname=foo&datavalue=bar",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample\" method=GET>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.html",
                    "method": "GET",
                    "evidence": "<form type=POST action=carts.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/cal1.jsp?action=Submit&email=ZAP&name=ZAP",
                    "method": "GET",
                    "evidence": "<FORM METHOD=POST ACTION=cal1.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "evidence": "<form action=\"CookieExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample\" method=GET>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample?dataname=ZAP&datavalue=ZAP",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample\" method=GET>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/checkbox/check.html",
                    "method": "GET",
                    "evidence": "<FORM TYPE=POST ACTION=checkresult.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/error/error.html",
                    "method": "GET",
                    "evidence": "<form method=get action=err.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=add",
                    "method": "GET",
                    "evidence": "<form type=POST action=carts.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.jsp?foo=bar",
                    "method": "GET",
                    "evidence": "<form action=\"implicit-objects.jsp\" method=\"GET\">"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/index.jsp",
                    "method": "GET",
                    "evidence": "<form method=\"POST\" action='j_security_check' >"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestParamExample",
                    "method": "POST",
                    "evidence": "<form action=\"RequestParamExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/functions.jsp?foo=JSP+2.0",
                    "method": "GET",
                    "evidence": "<form action=\"functions.jsp\" method=\"GET\">"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/nonblocking/bytecounter.html",
                    "method": "GET",
                    "evidence": "<form method=\"POST\" enctype=\"multipart/form-data\" action=\"bytecounter\" >"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colors.html",
                    "method": "GET",
                    "evidence": "<form method=GET action=colrs.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/login.html",
                    "method": "GET",
                    "evidence": "<form method=GET action=cal1.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/num/numguess.jsp?guess=ZAP",
                    "method": "GET",
                    "evidence": "<form method=get>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=remove",
                    "method": "GET",
                    "evidence": "<form type=POST action=carts.jsp>"
                }
            ]
        },
        "id": "7e0751eb-ae31-4686-b0b5-53df0e00ea4b"
    },
    {
        "name": "User Controllable HTML Element Attribute (Potential XSS)",
        "description": "This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.",
        "category": "User Controllable HTML Element Attribute (Potential XSS)",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "7",
            "zap_solution": "Validate all input and sanitize output it before writing to any HTML attributes.",
            "zap_otherinfo": "User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Hint&color1=ZAP&color2=ZAPappears to include user input in: a(n) [input] tag [value] attribute The user input found was:action=HintThe user-controlled value was:hint",
            "zap_reference": "http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute",
            "zap_cweid": "20",
            "zap_wascid": "20",
            "zap_riskcode": "0",
            "zap_pluginid": "10031",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Hint&color1=ZAP&color2=ZAP",
                    "method": "GET",
                    "param": "action"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Submit&color1=ZAP&color2=ZAP",
                    "method": "GET",
                    "param": "action"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/functions.jsp?foo=JSP+2.0",
                    "method": "GET",
                    "param": "foo"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.jsp?foo=bar",
                    "method": "GET",
                    "param": "foo"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=remove",
                    "method": "GET",
                    "param": "submit"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Submit&color1=ZAP&color2=ZAP",
                    "method": "GET",
                    "param": "action"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=add",
                    "method": "GET",
                    "param": "submit"
                }
            ]
        },
        "id": "1139b86b-5eb2-4ef9-b5f3-24beeedafbf2"
    },
    {
        "name": "Private IP Disclosure",
        "description": "A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.",
        "category": "Private IP Disclosure",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "4",
            "zap_solution": "Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.",
            "zap_otherinfo": "10.1.20.26",
            "zap_reference": "https://tools.ietf.org/html/rfc1918",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "2",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestInfoExample",
                    "method": "GET",
                    "evidence": "10.1.20.26"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.jsp",
                    "method": "GET",
                    "evidence": "10.1.20.26"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/filter.html",
                    "method": "GET",
                    "evidence": "192.168.0.10"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/monitoring.html",
                    "method": "GET",
                    "evidence": "192.168.1.75"
                }
            ]
        },
        "id": "32b8e793-7258-4e6b-bc60-f13ab05dc489"
    },
    {
        "name": "Application Error Disclosure",
        "description": "This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.",
        "category": "Application Error Disclosure",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "5",
            "zap_solution": "Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.",
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "2",
            "zap_pluginid": "90022",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jndi-resources-howto.html",
                    "method": "GET",
                    "evidence": "JDBC Driver"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/manager-howto.html",
                    "method": "GET",
                    "evidence": "java.lang.NumberFormatException: For input string:"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jndi-datasource-examples-howto.html",
                    "method": "GET",
                    "evidence": "JDBC Driver"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/listeners.html",
                    "method": "GET",
                    "evidence": "JDBC Driver"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/valve.html",
                    "method": "GET",
                    "evidence": "Error Report"
                }
            ]
        },
        "id": "13184616-ff12-4785-8c31-1c9d9d11942a"
    },
    {
        "name": "Modern Web Application",
        "description": "The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.",
        "category": "Modern Web Application",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "4",
            "zap_solution": "This is an informational alert and so no changes are required.",
            "zap_otherinfo": "No links have been found while there are scripts, which is an indication that this is a modern web application.",
            "zap_reference": null,
            "zap_cweid": null,
            "zap_wascid": null,
            "zap_riskcode": "0",
            "zap_pluginid": "10109",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/echo.xhtml",
                    "method": "GET",
                    "evidence": "<script type=\"application/javascript\"><![CDATA[\n        \"use strict\";\n\n        var ws = null;\n\n        function setConnected(connected) {\n            document.getElementById('connect').disabled = connected;\n            document.getElementById('disconnect').disabled = !connected;\n            document.getElementById('echo').disabled = !connected;\n        }\n\n        function connect() {\n            var target = document.getElementById('target').value;\n            if (target == '') {\n                alert('Please select server side connection implementation.');\n                return;\n            }\n            if ('WebSocket' in window) {\n                ws = new WebSocket(target);\n            } else if ('MozWebSocket' in window) {\n                ws = new MozWebSocket(target);\n            } else {\n                alert('WebSocket is not supported by this browser.');\n                return;\n            }\n            ws.onopen = function () {\n                setConnected(true);\n                log('Info: WebSocket connection opened.');\n            };\n            ws.onmessage = function (event) {\n                log('Received: ' + event.data);\n            };\n            ws.onclose = function (event) {\n                setConnected(false);\n                log('Info: WebSocket connection closed, Code: ' + event.code + (event.reason == \"\" ? \"\" : \", Reason: \" + event.reason));\n            };\n        }\n\n        function disconnect() {\n            if (ws != null) {\n                ws.close();\n                ws = null;\n            }\n            setConnected(false);\n        }\n\n        function echo() {\n            if (ws != null) {\n                var message = document.getElementById('message').value;\n                log('Sent: ' + message);\n                ws.send(message);\n            } else {\n                alert('WebSocket connection not established, please connect.');\n            }\n        }\n\n        function updateTarget(target) {\n            if (window.location.protocol == 'http:') {\n                document.getElementById('target').value = 'ws://' + window.location.host + target;\n            } else {\n                document.getElementById('target').value = 'wss://' + window.location.host + target;\n            }\n        }\n\n        function log(message) {\n            var console = document.getElementById('console');\n            var p = document.createElement('p');\n            p.style.wordWrap = 'break-word';\n            p.appendChild(document.createTextNode(message));\n            console.appendChild(p);\n            while (console.childNodes.length > 25) {\n                console.removeChild(console.firstChild);\n            }\n            console.scrollTop = console.scrollHeight;\n        }\n\n\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            // Remove elements with \"noscript\" class - <noscript> is not allowed in XHTML\n            var noscripts = document.getElementsByClassName(\"noscript\");\n            for (var i = 0; i < noscripts.length; i++) {\n                noscripts[i].parentNode.removeChild(noscripts[i]);\n            }\n        }, false);\n    ]]></script>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/drawboard.xhtml",
                    "method": "GET",
                    "evidence": "<script type=\"application/javascript\"><![CDATA[\n    \"use strict\";\n\n    (function() {\n\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            // Remove elements with \"noscript\" class - <noscript> is not\n            // allowed in XHTML\n            var noscripts = document.getElementsByClassName(\"noscript\");\n            for (var i = 0; i < noscripts.length; i++) {\n                noscripts[i].parentNode.removeChild(noscripts[i]);\n            }\n\n            // Add script for expand content.\n            var expandElements = document.getElementsByClassName(\"expand\");\n            for (var ixx = 0; ixx < expandElements.length; ixx++) {\n                (function(el) {\n                    var expandContent = document.getElementById(el.getAttribute(\"data-content-id\"));\n                    expandContent.style.display = \"none\";\n                    var arrow = document.createTextNode(\"◢ \");\n                    var arrowSpan = document.createElement(\"span\");\n                    arrowSpan.appendChild(arrow);\n\n                    var link = document.createElement(\"a\");\n                    link.setAttribute(\"href\", \"#!\");\n                    while (el.firstChild != null) {\n                        link.appendChild(el.removeChild(el.firstChild));\n                    }\n                    el.appendChild(arrowSpan);\n                    el.appendChild(link);\n\n                    var textSpan = document.createElement(\"span\");\n                    textSpan.setAttribute(\"style\", \"font-weight: normal;\");\n                    textSpan.appendChild(document.createTextNode(\" (click to expand)\"));\n                    el.appendChild(textSpan);\n\n\n                    var visible = true;\n\n                    var switchExpand = function() {\n                        visible = !visible;\n                        expandContent.style.display = visible ? \"block\" : \"none\";\n                        arrowSpan.style.color = visible ? \"#000\" : \"#888\";\n                        return false;\n                    };\n\n                    link.onclick = switchExpand;\n                    switchExpand();\n\n                })(expandElements[ixx]);\n            }\n\n\n            var Console = {};\n\n            Console.log = (function() {\n                var consoleContainer =\n                    document.getElementById(\"console-container\");\n                var console = document.createElement(\"div\");\n                console.setAttribute(\"id\", \"console\");\n                consoleContainer.appendChild(console);\n\n                return function(message) {\n                    var p = document.createElement('p');\n                    p.style.wordWrap = \"break-word\";\n                    p.appendChild(document.createTextNode(message));\n                    console.appendChild(p);\n                    while (console.childNodes.length > 25) {\n                        console.removeChild(console.firstChild);\n                    }\n                    console.scrollTop = console.scrollHeight;\n                }\n            })();\n\n\n            function Room(drawContainer) {\n\n                /* A pausable event forwarder that can be used to pause and\n                 * resume handling of events (e.g. when we need to wait\n                 * for a Image's load event before we can process further\n                 * WebSocket messages).\n                 * The object's callFunction(func) should be called from an\n                 * event handler and give the function to handle the event as\n                 * argument.\n                 * Call pauseProcessing() to suspend event forwarding and\n                 * resumeProcessing() to resume it.\n                 */\n                function PausableEventForwarder() {\n\n                    var pauseProcessing = false;\n                    // Queue for buffering functions to be called.\n                    var functionQueue = [];\n\n                    this.callFunction = function(func) {\n                        // If message processing is paused, we push it\n                        // into the queue - otherwise we process it directly.\n                        if (pauseProcessing) {\n                            functionQueue.push(func);\n                        } else {\n                            func();\n                        }\n                    };\n\n                    this.pauseProcessing = function() {\n                        pauseProcessing = true;\n                    };\n\n                    this.resumeProcessing = function() {\n                        pauseProcessing = false;\n\n                        // Process all queued functions until some handler calls\n                        // pauseProcessing() again.\n                        while (functionQueue.length > 0 && !pauseProcessing) {\n                            var func = functionQueue.pop();\n                            func();\n                        }\n                    };\n                }\n\n                // The WebSocket object.\n                var socket;\n                // ID of the timer which sends ping messages.\n                var pingTimerId;\n\n                var isStarted = false;\n                var playerCount = 0;\n\n                // An array of PathIdContainer objects that the server\n                // did not yet handle.\n                // They are ordered by id (ascending).\n                var pathsNotHandled = [];\n\n                var nextMsgId = 1;\n\n                var canvasDisplay = document.createElement(\"canvas\");\n                var canvasBackground = document.createElement(\"canvas\");\n                var canvasServerImage = document.createElement(\"canvas\");\n                var canvasArray = [canvasDisplay, canvasBackground,\n                    canvasServerImage];\n                canvasDisplay.addEventListener(\"mousedown\", function(e) {\n                    // Prevent default mouse event to prevent browsers from marking text\n                    // (and Chrome from displaying the \"text\" cursor).\n                    e.preventDefault();\n                }, false);\n\n                var labelPlayerCount = document.createTextNode(\"0\");\n                var optionContainer = document.createElement(\"div\");\n\n\n                var canvasDisplayCtx = canvasDisplay.getContext(\"2d\");\n                var canvasBackgroundCtx = canvasBackground.getContext(\"2d\");\n                var canvasServerImageCtx = canvasServerImage.getContext(\"2d\");\n                var canvasMouseMoveHandler;\n                var canvasMouseDownHandler;\n\n                var isActive = false;\n                var mouseInWindow = false;\n                var mouseDown = false;\n                var currentMouseX = 0, currentMouseY = 0;\n                var currentPreviewPath = null;\n\n                var availableColors = [];\n                var currentColorIndex;\n                var colorContainers;\n                var previewTransparency = 0.65;\n\n                var availableThicknesses = [2, 3, 6, 10, 16, 28, 50];\n                var currentThicknessIndex;\n                var thicknessContainers;\n\n                var availableDrawTypes = [\n                           { name: \"Brush\", id: 1, continuous: true },\n                           { name: \"Line\", id: 2, continuous: false },\n                           { name: \"Rectangle\", id: 3, continuous: false },\n                           { name: \"Ellipse\", id: 4, continuous: false }\n                ];\n                var currentDrawTypeIndex;\n                var drawTypeContainers;\n\n\n                var labelContainer = document.getElementById(\"labelContainer\");\n                var placeholder = document.createElement(\"div\");\n                placeholder.appendChild(document.createTextNode(\"Loading... \"));\n                var progressElem = document.createElement(\"progress\");\n                placeholder.appendChild(progressElem);\n\n                labelContainer.appendChild(placeholder);\n\n                function rgb(color) {\n                       return \"rgba(\" + color[0] + \",\" + color[1] + \",\"\n                               + color[2] + \",\" + color[3] + \")\";\n                   }\n\n                function PathIdContainer(path, id) {\n                    this.path = path;\n                    this.id = id;\n                }\n\n                function Path(type, color, thickness, x1, y1, x2, y2, lastInChain) {\n                    this.type = type;\n                    this.color = color;\n                    this.thickness = thickness;\n                    this.x1 = x1;\n                    this.y1 = y1;\n                    this.x2 = x2;\n                    this.y2 = y2;\n                    this.lastInChain = lastInChain;\n\n                    function ellipse(ctx, x, y, w, h) {\n                        /* Drawing a ellipse cannot be done directly in a\n                         * CanvasRenderingContext2D - we need to use drawArc()\n                         * in conjunction with scaling the context so that we\n                         * get the needed proportion.\n                         */\n                        ctx.save();\n\n                        // Translate and scale the context so that we can draw\n                        // an arc at (0, 0) with a radius of 1.\n                        ctx.translate(x + w / 2, y + h / 2);\n                        ctx.scale(w / 2, h / 2);\n\n                        ctx.beginPath();\n                        ctx.arc(0, 0, 1, 0, Math.PI * 2, false);\n\n                        ctx.restore();\n                    }\n\n                    this.draw = function(ctx) {\n                        ctx.beginPath();\n                        ctx.lineCap = \"round\";\n                        ctx.lineWidth = thickness;\n                        var style = rgb(color);\n                        ctx.strokeStyle = style;\n\n                        if (x1 == x2 && y1 == y2) {\n                            // Always draw as arc to meet the behavior\n                            // in Java2D.\n                            ctx.fillStyle = style;\n                            ctx.arc(x1, y1, thickness / 2.0, 0,\n                                    Math.PI * 2.0, false);\n                            ctx.fill();\n                        } else {\n                            if (type == 1 || type == 2) {\n                                // Draw a line.\n                                ctx.moveTo(x1, y1);\n                                ctx.lineTo(x2, y2);\n                                ctx.stroke();\n                            } else if (type == 3) {\n                                // Draw a rectangle.\n                                if (x1 == x2 || y1 == y2) {\n                                    // Draw as line\n                                    ctx.moveTo(x1, y1);\n                                    ctx.lineTo(x2, y2);\n                                    ctx.stroke();\n                                } else {\n                                    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);\n                                }\n                            } else if (type == 4) {\n                                // Draw a ellipse.\n                                ellipse(ctx, x1, y1, x2 - x1, y2 - y1);\n                                ctx.closePath();\n                                ctx.stroke();\n                            }\n                        }\n                    };\n                }\n\n\n                function connect() {\n                    var host = (window.location.protocol == \"https:\"\n                            ? \"wss://\" : \"ws://\") + window.location.host\n                            + \"/examples/websocket/drawboard\";\n                    socket = new WebSocket(host);\n\n                    /* Use a pausable event forwarder.\n                     * This is needed when we load an Image object with data\n                     * from a previous message, because we must wait until the\n                     * Image's load event it raised before we can use it (and\n                     * in the meantime the socket.message event could be\n                     * raised).\n                     * Therefore we need this pausable event handler to handle\n                     * e.g. socket.onmessage and socket.onclose.\n                     */\n                    var eventForwarder = new PausableEventForwarder();\n\n                    socket.onopen = function () {\n                        // Socket has opened. Now wait for the server to\n                        // send us the initial packet.\n                        Console.log(\"WebSocket connection opened.\");\n\n                        // Set up a timer for pong messages.\n                        pingTimerId = window.setInterval(function() {\n                            socket.send(\"0\");\n                        }, 30000);\n                    };\n\n                    socket.onclose = function () {\n                        eventForwarder.callFunction(function() {\n                            Console.log(\"WebSocket connection closed.\");\n                            disableControls();\n\n                            // Disable pong timer.\n                            window.clearInterval(pingTimerId);\n                        });\n                    };\n\n                    // Handles an incoming Websocket message.\n                    var handleOnMessage = function(message) {\n\n                        // Split joined message and process them\n                        // invidividually.\n                        var messages = message.data.split(\";\");\n                        for (var msgArrIdx = 0; msgArrIdx < messages.length;\n                                msgArrIdx++) {\n                            var msg = messages[msgArrIdx];\n                            var type = msg.substring(0, 1);\n\n                            if (type == \"0\") {\n                                // Error message.\n                                var error = msg.substring(1);\n                                // Log it to the console and show an alert.\n                                Console.log(\"Error: \" + error);\n                                alert(error);\n\n                            } else {\n                                if (!isStarted) {\n                                    if (type == \"2\") {\n                                        // Initial message. It contains the\n                                        // number of players.\n                                        // After this message we will receive\n                                        // a binary message containing the current\n                                        // room image as PNG.\n                                        playerCount = parseInt(msg.substring(1));\n\n                                        refreshPlayerCount();\n\n                                        // The next message will be a binary\n                                        // message containing the room images\n                                        // as PNG. Therefore we temporarily swap\n                                        // the message handler.\n                                        var originalHandler = handleOnMessage;\n                                        handleOnMessage = function(message) {\n                                            // First, we restore the original handler.\n                                            handleOnMessage = originalHandler;\n\n                                            // Read the image.\n                                            var blob = message.data;\n                                            // Create new blob with correct MIME type.\n                                            blob = new Blob([blob], {type : \"image/png\"});\n\n                                            var url = URL.createObjectURL(blob);\n\n                                            var img = new Image();\n\n                                            // We must wait until the onload event is\n                                            // raised until we can draw the image onto\n                                            // the canvas.\n                                            // Therefore we need to pause the event\n                                            // forwarder until the image is loaded.\n                                            eventForwarder.pauseProcessing();\n\n                                            img.onload = function() {\n\n                                                // Release the object URL.\n                                                URL.revokeObjectURL(url);\n\n                                                // Set the canvases to the correct size.\n                                                for (var i = 0; i < canvasArray.length; i++) {\n                                                    canvasArray[i].width = img.width;\n                                                    canvasArray[i].height = img.height;\n                                                }\n\n                                                // Now draw the image on the last canvas.\n                                                canvasServerImageCtx.clearRect(0, 0,\n                                                        canvasServerImage.width,\n                                                        canvasServerImage.height);\n                                                canvasServerImageCtx.drawImage(img, 0, 0);\n\n                                                // Draw it on the background canvas.\n                                                canvasBackgroundCtx.drawImage(canvasServerImage,\n                                                        0, 0);\n\n                                                isStarted = true;\n                                                startControls();\n\n                                                // Refresh the display canvas.\n                                                refreshDisplayCanvas();\n\n\n                                                // Finally, resume the event forwarder.\n                                                eventForwarder.resumeProcessing();\n                                            };\n\n                                            img.src = url;\n                                        };\n                                    }\n                                } else {\n                                    if (type == \"3\") {\n                                        // The number of players in this room changed.\n                                        var playerAdded = msg.substring(1) == \"+\";\n                                        playerCount += playerAdded ? 1 : -1;\n                                        refreshPlayerCount();\n\n                                        Console.log(\"Player \" + (playerAdded\n                                                ? \"joined.\" : \"left.\"));\n\n                                    } else if (type == \"1\") {\n                                        // We received a new DrawMessage.\n                                        var maxLastHandledId = -1;\n                                        var drawMessages = msg.substring(1).split(\"|\");\n                                        for (var i = 0; i < drawMessages.length; i++) {\n                                            var elements = drawMessages[i].split(\",\");\n                                            var lastHandledId = parseInt(elements[0]);\n                                               maxLastHandledId = Math.max(maxLastHandledId,\n                                                       lastHandledId);\n\n                                            var path = new Path(\n                                                    parseInt(elements[1]),\n                                                    [parseInt(elements[2]),\n                                                    parseInt(elements[3]),\n                                                    parseInt(elements[4]),\n                                                    parseInt(elements[5]) / 255.0],\n                                                    parseFloat(elements[6]),\n                                                    parseFloat(elements[7]),\n                                                    parseFloat(elements[8]),\n                                                    parseFloat(elements[9]),\n                                                    parseFloat(elements[10]),\n                                                    elements[11] != \"0\");\n\n                                            // Draw the path onto the last canvas.\n                                            path.draw(canvasServerImageCtx);\n                                        }\n\n                                        // Draw the last canvas onto the background one.\n                                        canvasBackgroundCtx.drawImage(canvasServerImage,\n                                                0, 0);\n\n                                        // Now go through the pathsNotHandled array and\n                                        // remove the paths that were already handled by\n                                        // the server.\n                                        while (pathsNotHandled.length > 0\n                                                && pathsNotHandled[0].id <= maxLastHandledId)\n                                            pathsNotHandled.shift();\n\n                                        // Now me must draw the remaining paths onto\n                                        // the background canvas.\n                                        for (var i = 0; i < pathsNotHandled.length; i++) {\n                                            pathsNotHandled[i].path.draw(canvasBackgroundCtx);\n                                        }\n\n                                        refreshDisplayCanvas();\n                                    }\n                                }\n                            }\n                        }\n                    };\n\n                    socket.onmessage = function(message) {\n                        eventForwarder.callFunction(function() {\n                            handleOnMessage(message);\n                        });\n                    };\n\n                }\n\n\n                function refreshPlayerCount() {\n                    labelPlayerCount.nodeValue = String(playerCount);\n                }\n\n                function refreshDisplayCanvas() {\n                    if (!isActive) { // Don't draw a curser when not active.\n                        return;\n                    }\n\n                    canvasDisplayCtx.drawImage(canvasBackground, 0, 0);\n                    if (currentPreviewPath != null) {\n                        // Draw the preview path.\n                        currentPreviewPath.draw(canvasDisplayCtx);\n\n                    } else if (mouseInWindow && !mouseDown) {\n                        canvasDisplayCtx.beginPath();\n                        var color = availableColors[currentColorIndex].slice(0);\n                        color[3] = previewTransparency;\n                        canvasDisplayCtx.fillStyle = rgb(color);\n\n                        canvasDisplayCtx.arc(currentMouseX, currentMouseY,\n                                availableThicknesses[currentThicknessIndex] / 2,\n                                0, Math.PI * 2.0, true);\n                        canvasDisplayCtx.fill();\n                    }\n\n                }\n\n                function startControls() {\n                    isActive = true;\n\n                    labelContainer.removeChild(placeholder);\n                    placeholder = undefined;\n\n                    labelContainer.appendChild(\n                            document.createTextNode(\"Number of Players: \"));\n                    labelContainer.appendChild(labelPlayerCount);\n\n\n                    drawContainer.style.display = \"block\";\n                    drawContainer.appendChild(canvasDisplay);\n\n                    drawContainer.appendChild(optionContainer);\n\n                    canvasMouseDownHandler = function(e) {\n                        if (e.button == 0) {\n                            currentMouseX = e.pageX - canvasDisplay.offsetLeft;\n                            currentMouseY = e.pageY - canvasDisplay.offsetTop;\n\n                            mouseDown = true;\n                            canvasMouseMoveHandler(e);\n\n                        } else if (mouseDown) {\n                            // Cancel drawing.\n                            mouseDown = false;\n                            currentPreviewPath = null;\n\n                            currentMouseX = e.pageX - canvasDisplay.offsetLeft;\n                            currentMouseY = e.pageY - canvasDisplay.offsetTop;\n\n                            refreshDisplayCanvas();\n                        }\n                    };\n                    canvasDisplay.addEventListener(\"mousedown\", canvasMouseDownHandler, false);\n\n                    canvasMouseMoveHandler = function(e) {\n                        var mouseX = e.pageX - canvasDisplay.offsetLeft;\n                        var mouseY = e.pageY - canvasDisplay.offsetTop;\n\n                        if (mouseDown) {\n                            var drawType = availableDrawTypes[currentDrawTypeIndex];\n\n                            if (drawType.continuous) {\n\n                                var path = new Path(drawType.id,\n                                        availableColors[currentColorIndex],\n                                        availableThicknesses[currentThicknessIndex],\n                                        currentMouseX, currentMouseY, mouseX,\n                                        mouseY, false);\n                                // Draw it on the background canvas.\n                                path.draw(canvasBackgroundCtx);\n\n                                // Send it to the sever.\n                                pushPath(path);\n\n                                // Refresh old coordinates\n                                currentMouseX = mouseX;\n                                currentMouseY = mouseY;\n\n                            } else {\n                                // Create a new preview path.\n                                var color = availableColors[currentColorIndex].slice(0);\n                                color[3] = previewTransparency;\n                                currentPreviewPath = new Path(drawType.id,\n                                        color,\n                                        availableThicknesses[currentThicknessIndex],\n                                        currentMouseX, currentMouseY, mouseX,\n                                        mouseY, false);\n                            }\n\n                            refreshDisplayCanvas();\n                        } else {\n                            currentMouseX = mouseX;\n                            currentMouseY = mouseY;\n\n                            if (mouseInWindow) {\n                                refreshDisplayCanvas();\n                            }\n                        }\n\n                    };\n                    document.addEventListener(\"mousemove\", canvasMouseMoveHandler, false);\n\n                    document.addEventListener(\"mouseup\", function(e) {\n                        if (e.button == 0) {\n                            if (mouseDown) {\n                                mouseDown = false;\n                                currentPreviewPath = null;\n\n                                var mouseX = e.pageX - canvasDisplay.offsetLeft;\n                                var mouseY = e.pageY - canvasDisplay.offsetTop;\n                                var drawType = availableDrawTypes[currentDrawTypeIndex];\n\n                                var path = new Path(drawType.id, availableColors[currentColorIndex],\n                                        availableThicknesses[currentThicknessIndex],\n                                        currentMouseX, currentMouseY, mouseX,\n                                        mouseY, true);\n                                // Draw it on the background canvas.\n                                path.draw(canvasBackgroundCtx);\n\n                                // Send it to the sever.\n                                pushPath(path);\n\n                                // Refresh old coordinates\n                                currentMouseX = mouseX;\n                                currentMouseY = mouseY;\n\n                                refreshDisplayCanvas();\n                            }\n                        }\n                    }, false);\n\n                    canvasDisplay.addEventListener(\"mouseout\", function(e) {\n                        mouseInWindow = false;\n                        refreshDisplayCanvas();\n                    }, false);\n\n                    canvasDisplay.addEventListener(\"mousemove\", function(e) {\n                        if (!mouseInWindow) {\n                            mouseInWindow = true;\n                            refreshDisplayCanvas();\n                        }\n                    }, false);\n\n\n                    // Create color and thickness controls.\n                    var colorContainersBox = document.createElement(\"div\");\n                    colorContainersBox.setAttribute(\"style\",\n                            \"margin: 4px; border: 1px solid #bbb; border-radius: 3px;\");\n                    optionContainer.appendChild(colorContainersBox);\n\n                    colorContainers = new Array(3 * 3 * 3);\n                    for (var i = 0; i < colorContainers.length; i++) {\n                        var colorContainer = colorContainers[i] =\n                            document.createElement(\"div\");\n                        var color = availableColors[i] =\n                            [\n                                Math.floor((i % 3) * 255 / 2),\n                                Math.floor((Math.floor(i / 3) % 3) * 255 / 2),\n                                Math.floor((Math.floor(i / (3 * 3)) % 3) * 255 / 2),\n                                1.0\n                            ];\n                        colorContainer.setAttribute(\"style\",\n                                \"margin: 3px; width: 18px; height: 18px; \"\n                                + \"float: left; background-color: \" + rgb(color));\n                        colorContainer.style.border = '2px solid #000';\n                        colorContainer.addEventListener(\"mousedown\", (function(ix) {\n                            return function() {\n                                setColor(ix);\n                            };\n                        })(i), false);\n\n                        colorContainersBox.appendChild(colorContainer);\n                    }\n\n                    var divClearLeft = document.createElement(\"div\");\n                    divClearLeft.setAttribute(\"style\", \"clear: left;\");\n                    colorContainersBox.appendChild(divClearLeft);\n\n\n                    var drawTypeContainersBox = document.createElement(\"div\");\n                    drawTypeContainersBox.setAttribute(\"style\",\n                           \"float: right; margin-right: 3px; margin-top: 1px;\");\n                    optionContainer.appendChild(drawTypeContainersBox);\n\n                    drawTypeContainers = new Array(availableDrawTypes.length);\n                    for (var i = 0; i < drawTypeContainers.length; i++) {\n                        var drawTypeContainer = drawTypeContainers[i] =\n                            document.createElement(\"div\");\n                        drawTypeContainer.setAttribute(\"style\",\n                                \"text-align: center; margin: 3px; padding: 0 3px;\"\n                                + \"height: 18px; float: left;\");\n                        drawTypeContainer.style.border = \"2px solid #000\";\n                        drawTypeContainer.appendChild(document.createTextNode(\n                                String(availableDrawTypes[i].name)));\n                        drawTypeContainer.addEventListener(\"mousedown\", (function(ix) {\n                            return function() {\n                                setDrawType(ix);\n                            };\n                        })(i), false);\n\n                        drawTypeContainersBox.appendChild(drawTypeContainer);\n                    }\n\n\n                    var thicknessContainersBox = document.createElement(\"div\");\n                    thicknessContainersBox.setAttribute(\"style\",\n                            \"margin: 3px; border: 1px solid #bbb; border-radius: 3px;\");\n                    optionContainer.appendChild(thicknessContainersBox);\n\n                    thicknessContainers = new Array(availableThicknesses.length);\n                    for (var i = 0; i < thicknessContainers.length; i++) {\n                        var thicknessContainer = thicknessContainers[i] =\n                            document.createElement(\"div\");\n                        thicknessContainer.setAttribute(\"style\",\n                                \"text-align: center; margin: 3px; width: 18px; \"\n                                + \"height: 18px; float: left;\");\n                        thicknessContainer.style.border = \"2px solid #000\";\n                        thicknessContainer.appendChild(document.createTextNode(\n                                String(availableThicknesses[i])));\n                        thicknessContainer.addEventListener(\"mousedown\", (function(ix) {\n                            return function() {\n                                setThickness(ix);\n                            };\n                        })(i), false);\n\n                        thicknessContainersBox.appendChild(thicknessContainer);\n                    }\n\n\n                    divClearLeft = document.createElement(\"div\");\n                    divClearLeft.setAttribute(\"style\", \"clear: left;\");\n                    thicknessContainersBox.appendChild(divClearLeft);\n\n\n                    setColor(0);\n                    setThickness(0);\n                    setDrawType(0);\n\n                }\n\n                function disableControls() {\n                    document.removeEventListener(\"mousedown\", canvasMouseDownHandler);\n                    document.removeEventListener(\"mousemove\", canvasMouseMoveHandler);\n                    mouseInWindow = false;\n                    refreshDisplayCanvas();\n\n                    isActive = false;\n                }\n\n                function pushPath(path) {\n\n                    // Push it into the pathsNotHandled array.\n                    var container = new PathIdContainer(path, nextMsgId++);\n                    pathsNotHandled.push(container);\n\n                    // Send the path to the server.\n                    var message = container.id + \"|\" + path.type + \",\"\n                            + path.color[0] + \",\" + path.color[1] + \",\"\n                            + path.color[2] + \",\"\n                            + Math.round(path.color[3] * 255.0) + \",\"\n                            + path.thickness + \",\" + path.x1 + \",\"\n                            + path.y1 + \",\" + path.x2 + \",\" + path.y2 + \",\"\n                            + (path.lastInChain ? \"1\" : \"0\");\n\n                    socket.send(\"1\" + message);\n                }\n\n                function setThickness(thicknessIndex) {\n                    if (typeof currentThicknessIndex !== \"undefined\")\n                        thicknessContainers[currentThicknessIndex]\n                            .style.borderColor = \"#000\";\n                    currentThicknessIndex = thicknessIndex;\n                    thicknessContainers[currentThicknessIndex]\n                        .style.borderColor = \"#d08\";\n                }\n\n                function setColor(colorIndex) {\n                    if (typeof currentColorIndex !== \"undefined\")\n                        colorContainers[currentColorIndex]\n                            .style.borderColor = \"#000\";\n                    currentColorIndex = colorIndex;\n                    colorContainers[currentColorIndex]\n                        .style.borderColor = \"#d08\";\n                }\n\n                function setDrawType(drawTypeIndex) {\n                    if (typeof currentDrawTypeIndex !== \"undefined\")\n                        drawTypeContainers[currentDrawTypeIndex]\n                            .style.borderColor = \"#000\";\n                    currentDrawTypeIndex = drawTypeIndex;\n                    drawTypeContainers[currentDrawTypeIndex]\n                        .style.borderColor = \"#d08\";\n                }\n\n\n                connect();\n\n            }\n\n\n            // Initialize the room\n            var room = new Room(document.getElementById(\"drawContainer\"));\n\n\n        }, false);\n\n    })();\n    ]]></script>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/snake.xhtml",
                    "method": "GET",
                    "evidence": "<script type=\"application/javascript\"><![CDATA[\n        \"use strict\";\n\n        var Game = {};\n\n        Game.fps = 30;\n        Game.socket = null;\n        Game.nextFrame = null;\n        Game.interval = null;\n        Game.direction = 'none';\n        Game.gridSize = 10;\n\n        function Snake() {\n            this.snakeBody = [];\n            this.color = null;\n        }\n\n        Snake.prototype.draw = function(context) {\n            for (var id in this.snakeBody) {\n                context.fillStyle = this.color;\n                context.fillRect(this.snakeBody[id].x, this.snakeBody[id].y, Game.gridSize, Game.gridSize);\n            }\n        };\n\n        Game.initialize = function() {\n            this.entities = [];\n            var canvas = document.getElementById('playground');\n            if (!canvas.getContext) {\n                Console.log('Error: 2d canvas not supported by this browser.');\n                return;\n            }\n            this.context = canvas.getContext('2d');\n            window.addEventListener('keydown', function (e) {\n                var code = e.keyCode;\n                if (code > 36 && code < 41) {\n                    switch (code) {\n                        case 37:\n                            if (Game.direction != 'east') Game.setDirection('west');\n                            break;\n                        case 38:\n                            if (Game.direction != 'south') Game.setDirection('north');\n                            break;\n                        case 39:\n                            if (Game.direction != 'west') Game.setDirection('east');\n                            break;\n                        case 40:\n                            if (Game.direction != 'north') Game.setDirection('south');\n                            break;\n                    }\n                }\n            }, false);\n            if (window.location.protocol == 'http:') {\n                Game.connect('ws://' + window.location.host + '/examples/websocket/snake');\n            } else {\n                Game.connect('wss://' + window.location.host + '/examples/websocket/snake');\n            }\n        };\n\n        Game.setDirection  = function(direction) {\n            Game.direction = direction;\n            Game.socket.send(direction);\n            Console.log('Sent: Direction ' + direction);\n        };\n\n        Game.startGameLoop = function() {\n            if (window.webkitRequestAnimationFrame) {\n                Game.nextFrame = function () {\n                    webkitRequestAnimationFrame(Game.run);\n                };\n            } else if (window.mozRequestAnimationFrame) {\n                Game.nextFrame = function () {\n                    mozRequestAnimationFrame(Game.run);\n                };\n            } else {\n                Game.interval = setInterval(Game.run, 1000 / Game.fps);\n            }\n            if (Game.nextFrame != null) {\n                Game.nextFrame();\n            }\n        };\n\n        Game.stopGameLoop = function () {\n            Game.nextFrame = null;\n            if (Game.interval != null) {\n                clearInterval(Game.interval);\n            }\n        };\n\n        Game.draw = function() {\n            this.context.clearRect(0, 0, 640, 480);\n            for (var id in this.entities) {\n                this.entities[id].draw(this.context);\n            }\n        };\n\n        Game.addSnake = function(id, color) {\n            Game.entities[id] = new Snake();\n            Game.entities[id].color = color;\n        };\n\n        Game.updateSnake = function(id, snakeBody) {\n            if (typeof Game.entities[id] != \"undefined\") {\n                Game.entities[id].snakeBody = snakeBody;\n            }\n        };\n\n        Game.removeSnake = function(id) {\n            Game.entities[id] = null;\n            // Force GC.\n            delete Game.entities[id];\n        };\n\n        Game.run = (function() {\n            var skipTicks = 1000 / Game.fps, nextGameTick = (new Date).getTime();\n\n            return function() {\n                while ((new Date).getTime() > nextGameTick) {\n                    nextGameTick += skipTicks;\n                }\n                Game.draw();\n                if (Game.nextFrame != null) {\n                    Game.nextFrame();\n                }\n            };\n        })();\n\n        Game.connect = (function(host) {\n            if ('WebSocket' in window) {\n                Game.socket = new WebSocket(host);\n            } else if ('MozWebSocket' in window) {\n                Game.socket = new MozWebSocket(host);\n            } else {\n                Console.log('Error: WebSocket is not supported by this browser.');\n                return;\n            }\n\n            Game.socket.onopen = function () {\n                // Socket open.. start the game loop.\n                Console.log('Info: WebSocket connection opened.');\n                Console.log('Info: Press an arrow key to begin.');\n                Game.startGameLoop();\n                setInterval(function() {\n                    // Prevent server read timeout.\n                    Game.socket.send('ping');\n                }, 5000);\n            };\n\n            Game.socket.onclose = function () {\n                Console.log('Info: WebSocket closed.');\n                Game.stopGameLoop();\n            };\n\n            Game.socket.onmessage = function (message) {\n                var packet = JSON.parse(message.data);\n                switch (packet.type) {\n                    case 'update':\n                        for (var i = 0; i < packet.data.length; i++) {\n                            Game.updateSnake(packet.data[i].id, packet.data[i].body);\n                        }\n                        break;\n                    case 'join':\n                        for (var j = 0; j < packet.data.length; j++) {\n                            Game.addSnake(packet.data[j].id, packet.data[j].color);\n                        }\n                        break;\n                    case 'leave':\n                        Game.removeSnake(packet.id);\n                        break;\n                    case 'dead':\n                        Console.log('Info: Your snake is dead, bad luck!');\n                        Game.direction = 'none';\n                        break;\n                    case 'kill':\n                        Console.log('Info: Head shot!');\n                        break;\n                }\n            };\n        });\n\n        var Console = {};\n\n        Console.log = (function(message) {\n            var console = document.getElementById('console');\n            var p = document.createElement('p');\n            p.style.wordWrap = 'break-word';\n            p.innerHTML = message;\n            console.appendChild(p);\n            while (console.childNodes.length > 25) {\n                console.removeChild(console.firstChild);\n            }\n            console.scrollTop = console.scrollHeight;\n        });\n\n        Game.initialize();\n\n\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            // Remove elements with \"noscript\" class - <noscript> is not allowed in XHTML\n            var noscripts = document.getElementsByClassName(\"noscript\");\n            for (var i = 0; i < noscripts.length; i++) {\n                noscripts[i].parentNode.removeChild(noscripts[i]);\n            }\n        }, false);\n\n        ]]></script>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/chat.xhtml",
                    "method": "GET",
                    "evidence": "<script type=\"application/javascript\"><![CDATA[\n        \"use strict\";\n\n        var Chat = {};\n\n        Chat.socket = null;\n\n        Chat.connect = (function(host) {\n            if ('WebSocket' in window) {\n                Chat.socket = new WebSocket(host);\n            } else if ('MozWebSocket' in window) {\n                Chat.socket = new MozWebSocket(host);\n            } else {\n                Console.log('Error: WebSocket is not supported by this browser.');\n                return;\n            }\n\n            Chat.socket.onopen = function () {\n                Console.log('Info: WebSocket connection opened.');\n                document.getElementById('chat').onkeydown = function(event) {\n                    if (event.keyCode == 13) {\n                        Chat.sendMessage();\n                    }\n                };\n            };\n\n            Chat.socket.onclose = function () {\n                document.getElementById('chat').onkeydown = null;\n                Console.log('Info: WebSocket closed.');\n            };\n\n            Chat.socket.onmessage = function (message) {\n                Console.log(message.data);\n            };\n        });\n\n        Chat.initialize = function() {\n            if (window.location.protocol == 'http:') {\n                Chat.connect('ws://' + window.location.host + '/examples/websocket/chat');\n            } else {\n                Chat.connect('wss://' + window.location.host + '/examples/websocket/chat');\n            }\n        };\n\n        Chat.sendMessage = (function() {\n            var message = document.getElementById('chat').value;\n            if (message != '') {\n                Chat.socket.send(message);\n                document.getElementById('chat').value = '';\n            }\n        });\n\n        var Console = {};\n\n        Console.log = (function(message) {\n            var console = document.getElementById('console');\n            var p = document.createElement('p');\n            p.style.wordWrap = 'break-word';\n            p.innerHTML = message;\n            console.appendChild(p);\n            while (console.childNodes.length > 25) {\n                console.removeChild(console.firstChild);\n            }\n            console.scrollTop = console.scrollHeight;\n        });\n\n        Chat.initialize();\n\n\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            // Remove elements with \"noscript\" class - <noscript> is not allowed in XHTML\n            var noscripts = document.getElementsByClassName(\"noscript\");\n            for (var i = 0; i < noscripts.length; i++) {\n                noscripts[i].parentNode.removeChild(noscripts[i]);\n            }\n        }, false);\n\n    ]]></script>"
                }
            ]
        },
        "id": "d6dc3899-b3fc-46cd-b544-590badef18fc"
    },
    {
        "name": "Weak Authentication Method",
        "description": "HTTP basic or digest authentication has been used over an unsecured connection. The credentials can be read and then reused by someone with access to the network.",
        "category": "Weak Authentication Method",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "3",
            "zap_solution": "Protect the connection using HTTPS or use a stronger authentication mechanism",
            "zap_otherinfo": null,
            "zap_reference": "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
            "zap_cweid": "326",
            "zap_wascid": "4",
            "zap_riskcode": "2",
            "zap_pluginid": "10105",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/manager/html",
                    "method": "GET",
                    "evidence": "WWW-Authenticate: Basic realm=\"Tomcat Manager Application\""
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/manager/status",
                    "method": "GET",
                    "evidence": "WWW-Authenticate: Basic realm=\"Tomcat Manager Application\""
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/host-manager/html",
                    "method": "GET",
                    "evidence": "WWW-Authenticate: Basic realm=\"Tomcat Host Manager Application\""
                }
            ]
        },
        "id": "ed7e142a-ea90-4cff-9bfa-214eb99fdf91"
    },
    {
        "name": "Content-Type Header Missing",
        "description": "The Content-Type header was either missing or empty.",
        "category": "Content-Type Header Missing",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "2",
            "zap_solution": "Ensure each page is setting the specific and appropriate content-type value for the content being delivered.",
            "zap_otherinfo": null,
            "zap_reference": "http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx",
            "zap_cweid": "345",
            "zap_wascid": "12",
            "zap_riskcode": "0",
            "zap_pluginid": "10019",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/sample/sample.war",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/async/async2",
                    "method": "GET"
                }
            ]
        },
        "id": "e56b88b8-68cd-4b11-b826-208126850a87"
    },
    {
        "name": "Cookie Without SameSite Attribute",
        "description": "A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.",
        "category": "Cookie Without SameSite Attribute",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "4",
            "zap_solution": "Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.",
            "zap_otherinfo": null,
            "zap_reference": "https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site",
            "zap_cweid": "16",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10054",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/index.jsp",
                    "method": "GET",
                    "param": "JSESSIONID",
                    "evidence": "Set-Cookie: JSESSIONID"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/basic-arithmetic.jsp",
                    "method": "GET",
                    "param": "JSESSIONID",
                    "evidence": "Set-Cookie: JSESSIONID"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/basic-comparisons.jsp",
                    "method": "GET",
                    "param": "JSESSIONID",
                    "evidence": "Set-Cookie: JSESSIONID"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "ZAP",
                    "evidence": "Set-Cookie: ZAP"
                }
            ]
        },
        "id": "fcbdde04-17da-482c-9c68-e9a3b8cdf1fb"
    },
    {
        "name": "Cookie Poisoning",
        "description": "This check looks at user-supplied input in query string parameters and POST data to identify where cookie parameters might be controlled. This is called a cookie poisoning attack, and becomes exploitable when an attacker can manipulate the cookie in various ways. In some cases this will not be exploitable, however, allowing URL parameters to set cookie values is generally considered a bug.",
        "category": "Cookie Poisoning",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "2",
            "zap_solution": "Do not allow user input to control cookie names and values. If some query string parameters must be set in cookie values, be sure to filter out semicolon's that can serve as name/value pair delimiters.",
            "zap_otherinfo": "An attacker may be able to poison cookie values through POST parameters. To test if this is a more serious issue, you should try resending that request as a GET, with the POST parameter included as a query string parameter. For example:  http://nottrusted.com/page?value=maliciousInput.This was identified at:http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExampleUser-input was found in the following cookie:ZAP=ZAP; Path=/examples/The user input was:cookievalue=ZAP",
            "zap_reference": "http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-cookie",
            "zap_cweid": "20",
            "zap_wascid": "20",
            "zap_riskcode": "0",
            "zap_pluginid": "10029",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "cookievalue"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "cookiename"
                }
            ]
        },
        "id": "f548884e-276e-4631-a32d-1ee3a803e031"
    },
    {
        "name": "Information Disclosure - Suspicious Comments",
        "description": "The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.",
        "category": "Information Disclosure - Suspicious Comments",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "5",
            "zap_solution": "Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.",
            "zap_otherinfo": "The following comment/snippet was identified via the pattern: \\bADMIN\\b    \"use strict\"; // Enable strict mode    (function() {      var thisScript = document.currentScript;      if (!thisScript) { // Workaround for IE         var scripts = document.getElementsByTagName(\"script\");        thisScript = scripts[scripts.length - 1];      }      document.addEventListener(\"DOMContentLoaded\", (function() {        var commentsDiv = document.getElementById(\"comments_thread\");        var commentsShortname = \"tomcat\";        var commentsIdentifier = \"http://tomcat.apache.org/\" +          thisScript.getAttribute(\"data-comments-identifier\") + \".html\";        (function(w, d) {          if (w.location.hostname.toLowerCase() == \"tomcat.apache.org\") {            var s = d.createElement(\"script\");            s.type = \"application/javascript\";            s.async = true;            s.src = \"https://comments.apache.org/show_comments.lua?site=\" +              encodeURIComponent(commentsShortname) +              \"&page=\" + encodeURIComponent(commentsIdentifier);            d.head.appendChild(s);          } else {            commentsDiv.appendChild(d.createTextNode(\"Comments are disabled for this page at the moment.\"));          }        })(window, document);      }), false);    })();  ",
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10027",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-opers.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/drawboard.xhtml",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-objects.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/echo.xhtml",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-apps.html",
                    "method": "GET"
                }
            ]
        },
        "id": "3d9212bf-54d8-4be4-8c47-18c7f006dee7"
    },
    {
        "name": "Cookie No HttpOnly Flag",
        "description": "A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.",
        "category": "Cookie No HttpOnly Flag",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Ensure that the HttpOnly flag is set for all cookies.",
            "zap_otherinfo": null,
            "zap_reference": "https://owasp.org/www-community/HttpOnly",
            "zap_cweid": "16",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10010",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "ZAP",
                    "evidence": "Set-Cookie: ZAP"
                }
            ]
        },
        "id": "7854eea8-b291-4273-ab3a-4ada6ba472f2"
    },
    {
        "name": "Information Disclosure - Suspicious Comments",
        "description": "The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.",
        "category": "Information Disclosure - Suspicious Comments",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "2",
            "zap_solution": "Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.",
            "zap_otherinfo": "The following comment/snippet was identified via the pattern: \\bADMINISTRATOR\\b         String constants used within your application, which         can be customized by the system administrator who is         installing your application.  The values actually         assigned to these parameters can be retrieved in a         servlet or JSP page by calling:             String value =               getServletContext().getInitParameter(\"name\");         where \"name\" matches the  element of         one of these initialization parameters.         You can define any number of context initialization         parameters, including zero.    -->The following comment/snippet was identified via the pattern: \\bWHERE\\b         your web application, including initialization         parameters.  With Tomcat, you can also send requests         to servlets not listed here with a request like this:           http://localhost:8080/{context-path}/servlet/{classname}         but this usage is not guaranteed to be portable.  It also         makes relative references to images and other resources         required by your servlet more complicated, so defining         all of your servlets (and defining a mapping to them with         a servlet-mapping element) is recommended.         Servlet initialization parameters can be retrieved in a         servlet or JSP page by calling:             String value =               getServletConfig().getInitParameter(\"name\");         where \"name\" matches the  element of         one of these initialization parameters.         You can define any number of servlets, including zero.    -->The following comment/snippet was identified via the pattern: \\bFROM\\b         in minutes.  From a servlet or JSP page, you can modify         the timeout for a particular session dynamically by using         HttpSession.getMaxInactiveInterval(). -->",
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10027",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/web.xml.txt",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/build.xml.txt",
                    "method": "GET"
                }
            ]
        },
        "id": "dbf95dc8-8a08-43a6-86c7-e34e892410d4"
    },
    {
        "name": "Application Error Disclosure",
        "description": "This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.",
        "category": "Application Error Disclosure",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.",
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "90022",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/error/err.jsp?name=bmw328i&submit=Submit",
                    "method": "GET",
                    "evidence": "HTTP/1.1 500 Internal Server Error"
                }
            ]
        },
        "id": "bfe66cec-6da6-474c-933e-683c2c9fffbf"
    },
    {
        "name": "Information Disclosure - Debug Error Messages",
        "description": "The response appeared to contain common error messages returned by platforms such as ASP.NET, and Web-servers such as IIS and Apache. You can configure the list of common debug messages.",
        "category": "Information Disclosure - Debug Error Messages",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Disable debugging messages before pushing to production.",
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10023",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/changelog.html",
                    "method": "GET",
                    "evidence": "internal server error"
                }
            ]
        },
        "id": "325de9a9-63f3-4ec1-a6aa-fd0e1eeae7c4"
    }
]

```


</TabItem>


</Tabs>
          
</TabItem>
          
<TabItem value="demo-bodgeit-full-scan">
  
<div>

</div>

<Tabs
defaultValue="sc"
values={[
  {label: 'Scan', value: 'sc'}, 
  {label: 'Findings', value: 'fd'},
]}>


<TabItem value="sc">

```yaml

apiVersion: "execution.experimental.securecodebox.io/v1"
kind: Scan
metadata:
  name: "zap-full-scan-bodgeit"
  labels:
    organization: "OWASP"
spec:
  scanType: "zap-full-scan"
  parameters:
    # target URL including the protocol
    - "-t"
    - "http://bodgeit.demo-apps.svc:8080"
    # include the alpha active and passive scan rules as well
    - "-a"                
    # show debug messages
    - "-d"
    # the number of minutes to spider for (default 1)
    - "-m"
    - "3"

```

</TabItem>



<TabItem value="fd">


```yaml

[
    {
        "name": "HTTP Only Site",
        "description": "The site is only served under HTTP and not HTTPS.",
        "category": "HTTP Only Site",
        "location": "https://bodgeit.demo-apps.svc",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Configure your web or application server to use SSL (https).",
            "zap_otherinfo": "Failed to connect.ZAP attempted to connect via: https://bodgeit.demo-apps.svc:443",
            "zap_reference": "https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Protection_Cheat_Sheet.htmlhttps://letsencrypt.org/",
            "zap_cweid": "311",
            "zap_wascid": "4",
            "zap_riskcode": "2",
            "zap_pluginid": "10106",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080",
                    "method": "GET"
                }
            ]
        },
        "id": "f8f1514f-17ea-4227-9d7f-9c46f35ff798"
    },
    {
        "name": "Insecure HTTP Method - PUT",
        "description": "This method was originally intended for file managemant operations. It is now most commonly used in REST services, PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource..",
        "category": "Insecure HTTP Method - PUT",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "323",
            "zap_solution": "TBA",
            "zap_otherinfo": "See the discussion on stackexchange: https://security.stackexchange.com/questions/21413/how-to-exploit-http-methods, for understanding REST operations see http://www.restapitutorial.com/lessons/httpmethods.html",
            "zap_reference": "http://projects.webappsec.org/Fingerprinting",
            "zap_cweid": "200",
            "zap_wascid": "45",
            "zap_riskcode": "2",
            "zap_pluginid": "90028",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/misc/EchoAttributesTag.java.html/s8uclk08bz",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.html/tzuj5ogtbx",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/forward/fwd.html/3t6zfqtnqe",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/x351y6uhoj",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/manager/psvhs1vz88",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/jts.html/dd6wfwbmkl",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/ServletToJsp.java.html/3vdg6c89rv",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/ktyhhbonqd",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/calendar.html/7rx7ih6pz8",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/composite.jsp.html/2sw49hyduf",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-jndi-realm.html/oz35t93hex",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-interceptor.html/7b3iipmfhp",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/tagfiles/panel.html/o7g7pdpkkz",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/tribes/package-summary.html/q94lxax2bm",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jspapi/tu7ozpyxxx",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/tagfiles/helloWorld.tag.html/wch3hc25o5",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.html/fzjtgyhfrt",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/aio.html/737jz15t5z",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/transport.html/tme98v7qo3",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/web.xml.txt/3feawr1mrb",
                    "method": "PUT",
                    "evidence": "response code 403 for potentially insecure HTTP METHOD"
                }
            ]
        },
        "id": "36058f3d-b8e3-4a79-9672-63a8fca166cc"
    },
    {
        "name": "User Agent Fuzzer",
        "description": "Check for differences in response based on fuzzed User Agent (eg. mobile sites, access as a Search Engine Crawler). Compares the response statuscode and the hashcode of the response body with the original response.",
        "category": "User Agent Fuzzer",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "455",
            "zap_solution": null,
            "zap_otherinfo": null,
            "zap_reference": "https://owasp.org/wstg",
            "zap_cweid": null,
            "zap_wascid": null,
            "zap_riskcode": "0",
            "zap_pluginid": "10104",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/chat",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/host-manager",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/servletapi",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/requestProcess",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/checkbox",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestHeaderExample",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/elapi",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.jsp",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/sample",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute/shuffle.jsp",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/tagfiles",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/websocketapi",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "msnbot/1.1 (+http://search.msn.com/msnbot.htm)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/host-manager",
                    "method": "GET",
                    "param": "Header User-Agent",
                    "attack": "msnbot/1.1 (+http://search.msn.com/msnbot.htm)"
                }
            ]
        },
        "id": "a011c334-3762-45ef-ad72-16e58bf826e4"
    },
    {
        "name": "Server Leaks Version Information via \"Server\" HTTP Response Header Field",
        "description": "The web/application server is leaking version information via the \"Server\" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.",
        "category": "Server Leaks Version Information via \"Server\" HTTP Response Header Field",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "337",
            "zap_solution": "Ensure that your web server, application server, load balancer, etc. is configured to suppress the \"Server\" header or provide generic details.",
            "zap_otherinfo": null,
            "zap_reference": "http://httpd.apache.org/docs/current/mod/core.html#servertokenshttp://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspxhttp://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10036",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/index.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute/shuffle.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/ServletToJsp.java.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-default.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/FindBookSimpleTag.java.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspx/basic.jspx",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/if.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.jsp",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/login.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/repeat.jsp",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jndi-resources-howto.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/status.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=foo&datavalue=bar",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/checkbox/checkresult.jsp?fruit=apples&submit=Submit",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/cookies.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/plugin/plugin.jsp",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/monitoring.html",
                    "method": "GET",
                    "evidence": "Apache-Coyote/1.1"
                }
            ]
        },
        "id": "b0ce669e-58c4-498a-a276-8d3a13c148d6"
    },
    {
        "name": "X-Frame-Options Header Not Set",
        "description": "X-Frame-Options header is not included in the HTTP response to protect against 'ClickJacking' attacks.",
        "category": "X-Frame-Options Header Not Set",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "280",
            "zap_solution": "Most modern Web browsers support the X-Frame-Options HTTP header. Ensure it's set on all web pages returned by your site (if you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. ALLOW-FROM allows specific websites to frame the web page in supported web browsers).",
            "zap_otherinfo": null,
            "zap_reference": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options",
            "zap_cweid": "16",
            "zap_wascid": "15",
            "zap_riskcode": "2",
            "zap_pluginid": "10020",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/include/include.jsp.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/automatic-deployment.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/tagfiles/hello.jsp",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/cluster-howto.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/interceptors.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/installation.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/ValuesBean.java.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/context.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/checkbox/checkresult.jsp.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-receiver.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/index.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/simpletag/foo.jsp.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/book.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/realm-howto.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/ssi-howto.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/index.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/introduction.html",
                    "method": "GET",
                    "param": "X-Frame-Options"
                }
            ]
        },
        "id": "392b9b9b-01f7-4cb5-85f2-3b539e25a4c4"
    },
    {
        "name": "Feature Policy Header Not Set",
        "description": "Feature Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Feature Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.",
        "category": "Feature Policy Header Not Set",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "298",
            "zap_solution": "Ensure that your web server, application server, load balancer, etc. is configured to set the Feature-Policy header.",
            "zap_otherinfo": null,
            "zap_reference": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policyhttps://developers.google.com/web/updates/2018/06/feature-policyhttps://scotthelme.co.uk/a-new-security-header-feature-policy/https://w3c.github.io/webappsec-feature-policy/https://www.smashingmagazine.com/2018/12/feature-policy/",
            "zap_cweid": "16",
            "zap_wascid": "15",
            "zap_riskcode": "1",
            "zap_pluginid": "10063",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/dates/date.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/index.xhtml",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jspapi/index.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/rewrite.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/choose.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/jts.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/index.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-apps.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/plugin/plugin.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/comments.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/resources.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/error/err.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=foo&datavalue=bar",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/foreach.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/hello.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/Functions.java.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/deployer-howto.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/FindBookSimpleTag.java.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute/shuffle.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/jar-scanner.html",
                    "method": "GET"
                }
            ]
        },
        "id": "faf1dc34-65c0-4771-b2cd-2c92b181d263"
    },
    {
        "name": "Cookie Slack Detector",
        "description": "Repeated GET requests: drop a different cookie each time, followed by normal request with all cookies to stabilize session, compare responses against original baseline GET. This can reveal areas where cookie based authentication/attributes are not actually enforced.",
        "category": "Cookie Slack Detector",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "186",
            "zap_solution": null,
            "zap_otherinfo": "NOTE: Because of its name this cookie may be important, but dropping it appears to have no effect: [JSESSIONID] Cookies that don't have expected effects can reveal flaws in application logic. In the worst case, this can reveal where authentication via cookie token(s) is not actually enforced.These cookies affected the response: These cookies did NOT affect the response: JSESSIONID",
            "zap_reference": "http://projects.webappsec.org/Fingerprinting",
            "zap_cweid": "200",
            "zap_wascid": "45",
            "zap_riskcode": "1",
            "zap_pluginid": "90027",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/images/execute.gif",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/ServletToJsp.java.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/error/er.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=remove",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/chat",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/num/numguess.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/checkbox/checkresult.jsp?fruit=apples&submit=Submit",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/FindBookSimpleTag.java.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/basic-arithmetic.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/Functions.java.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/clr.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/images/return.gif",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/if.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/images/read.gif",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/composite.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/hello.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/images",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/images/execute.gif",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/tagfiles/panel.html",
                    "method": "GET"
                }
            ]
        },
        "id": "19fef1b7-287a-47a9-a4e0-f2e65f7fa8d0"
    },
    {
        "name": "Storable and Cacheable Content",
        "description": "The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users.  If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where \"shared\" caching servers such as \"proxy\" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.",
        "category": "Storable and Cacheable Content",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "329",
            "zap_solution": "Validate that the response does not contain sensitive, personal or user-specific information.  If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:Cache-Control: no-cache, no-store, must-revalidate, privatePragma: no-cacheExpires: 0This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request. ",
            "zap_otherinfo": "In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.",
            "zap_reference": "https://tools.ietf.org/html/rfc7234https://tools.ietf.org/html/rfc7231http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)",
            "zap_cweid": "524",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10049",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/jsptoservlet.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.jsp?foo=bar",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/sessionidgenerator.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute/jspattribute.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/composite.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-memory-realm.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/cal1.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/Server.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jdbc-pool.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/reqparams.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/images/update.gif",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/juli/package-summary.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/include/include.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspattribute/jspattribute.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/apr.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/class-loader-howto.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/choose.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspx/textRotate.jspx.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/service.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/notes.html",
                    "method": "GET"
                }
            ]
        },
        "id": "faa83cbc-a2ae-402b-9afa-3bfdcfa09c09"
    },
    {
        "name": "Timestamp Disclosure - Unix",
        "description": "A timestamp was disclosed by the application/web server - Unix",
        "category": "Timestamp Disclosure - Unix",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "51",
            "zap_solution": "Manually confirm that the timestamp data is not sensitive, and that the data cannot be aggregated to disclose exploitable patterns.",
            "zap_otherinfo": "0000000008, which evaluates to: 1970-01-01 00:00:08",
            "zap_reference": "http://projects.webappsec.org/w/page/13246936/Information%20Leakage",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10096",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000008"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000018373"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000040687"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000001995"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000017"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/book.jsp",
                    "method": "GET",
                    "evidence": "0618002251"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000027"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000011633"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000002146"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000039"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000014963"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000005503"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000016347"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000011768"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000015583"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/images/update.gif",
                    "method": "GET",
                    "evidence": "0123456789"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestHeaderExample",
                    "method": "GET",
                    "evidence": "20100101"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000000022"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/startup/serverStartup.pdf",
                    "method": "GET",
                    "evidence": "0000014864"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.jsp",
                    "method": "GET",
                    "evidence": "20100101"
                }
            ]
        },
        "id": "749c304b-7d5f-4944-96f6-192bb0a45532"
    },
    {
        "name": "X-Content-Type-Options Header Missing",
        "description": "The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.",
        "category": "X-Content-Type-Options Header Missing",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "316",
            "zap_solution": "Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.",
            "zap_otherinfo": "This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.At \"High\" threshold this scanner will not alert on client or server error responses.",
            "zap_reference": "http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspxhttps://owasp.org/www-community/Security_Headers",
            "zap_cweid": "16",
            "zap_wascid": "15",
            "zap_riskcode": "1",
            "zap_pluginid": "10021",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/jts.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/rewrite.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-apps.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/images/code.gif",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/deployer-howto.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/foreach.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/favicon.ico",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestHeaderExample",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/plugin/plugin.jsp",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/index.xhtml",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/comments.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/tagplugin/choose.jsp",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=foo&datavalue=bar",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspx/textRotate.jspx",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspx/textRotate.jspx.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/error/err.jsp.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/resources.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/class-loader-howto.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/FindBookSimpleTag.java.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/jar-scanner.html",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                }
            ]
        },
        "id": "9504f6ac-635c-41a6-b4d4-32d69cdf6020"
    },
    {
        "name": "Base64 Disclosure",
        "description": "Base64 encoded data was disclosed by the application/web server. Note: in the interests of performance not all base64 strings in the response were analyzed individually, the entire response should be looked at by the analyst/security team/developer(s).",
        "category": "Base64 Disclosure",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "25",
            "zap_solution": "Manually confirm that the Base64 data does not leak sensitive information, and that the data cannot be aggregated/used to exploit other vulnerabilities.",
            "zap_otherinfo": "��?i�.���k�(�k��ܩ��\\x001e��ߊv��;+ߍ?�w^",
            "zap_reference": "http://projects.webappsec.org/w/page/13246936/Information%20Leakage",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10094",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/index.html",
                    "method": "GET",
                    "evidence": "org/aboutJava/communityprocess/final/jsr340/index"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/windows-auth-howto.html",
                    "method": "GET",
                    "evidence": "com/javase/7/docs/technotes/guides/security/jgss/tutorials/Troubleshooting"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/http.html",
                    "method": "GET",
                    "evidence": "com/javase/7/docs/api/java/net/Socket"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/book.jsp.html",
                    "method": "GET",
                    "evidence": "/WEB-INF/jsp2/jsp2-example-taglib"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jndi-datasource-examples-howto.html",
                    "method": "GET",
                    "evidence": "Oracle_8i_with_OCI_client/Introduction"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cookie-processor.html",
                    "method": "GET",
                    "evidence": "RFC_6265_Cookie_Processor_-_org"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/cluster-howto.html",
                    "method": "GET",
                    "evidence": "0-doc/api/org/apache/catalina/tribes/Channel"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/ajp.html",
                    "method": "GET",
                    "evidence": "com/javase/6/docs/api/java/net/Socket"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jdbc-pool.html",
                    "method": "GET",
                    "evidence": "com/javase/6/docs/api/javax/sql/DataSource"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/requestProcess.html",
                    "method": "GET",
                    "evidence": "0-doc/architecture/requestProcess"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/",
                    "method": "GET",
                    "evidence": "org/aboutJava/communityprocess/final/jsr340/index"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/realm-howto.html",
                    "method": "GET",
                    "evidence": "com/javase/7/docs/technotes/guides/security/jaas/tutorials/GeneralAcnOnly"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/manager-howto.html",
                    "method": "GET",
                    "evidence": "8080/manager/text/sslConnectorCiphers"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/hello.jsp.html",
                    "method": "GET",
                    "evidence": "/WEB-INF/jsp2/jsp2-example-taglib"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/jspx/basic.jspx",
                    "method": "GET",
                    "evidence": "org/TR/xhtml-basic/xhtml-basic10"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-sender.html",
                    "method": "GET",
                    "evidence": "com/javase/7/docs/api/java/net/Socket"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/filter.html",
                    "method": "GET",
                    "evidence": "org/Protocols/rfc2616/rfc2616-sec14"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-interceptor.html",
                    "method": "GET",
                    "evidence": "MessageDispatch15Interceptor_Attributes"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/introduction.html",
                    "method": "GET",
                    "evidence": "org/aboutJava/communityprocess/mrel/jsr245/index2"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-default.html",
                    "method": "GET",
                    "evidence": "org/aboutJava/communityprocess/final/jsr340/index"
                }
            ]
        },
        "id": "22c9f213-8db6-4651-a9c7-486c60ef2224"
    },
    {
        "name": "Content Security Policy (CSP) Header Not Set",
        "description": "Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.",
        "category": "Content Security Policy (CSP) Header Not Set",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "298",
            "zap_solution": "Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header, to achieve optimal browser support: \"Content-Security-Policy\" for Chrome 25+, Firefox 23+ and Safari 7+, \"X-Content-Security-Policy\" for Firefox 4.0+ and Internet Explorer 10+, and \"X-WebKit-CSP\" for Chrome 14+ and Safari 6+.",
            "zap_otherinfo": null,
            "zap_reference": "https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policyhttps://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.htmlhttp://www.w3.org/TR/CSP/http://w3c.github.io/webappsec/specs/content-security-policy/csp-specification.dev.htmlhttp://www.html5rocks.com/en/tutorials/security/content-security-policy/http://caniuse.com/#feat=contentsecuritypolicyhttp://content-security-policy.com/",
            "zap_cweid": "16",
            "zap_wascid": "15",
            "zap_riskcode": "1",
            "zap_pluginid": "10038",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/connectors.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/listeners.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/helloworld.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/plugin/plugin.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/virtual-hosting-howto.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/tagfiles/products.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/simpletag/hello.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/websocketapi/index.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/windows-auth-howto.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/dates/date.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/misc/dynamicattrs.jsp.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/xml/xml.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/architecture/index.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/elapi/index.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/composite.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/introduction.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/checkbox/check.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/windows-service-howto.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/server.html",
                    "method": "GET"
                }
            ]
        },
        "id": "baf81020-3f58-4e18-beed-2c8f96b9efe0"
    },
    {
        "name": "Reverse Tabnabbing",
        "description": "At least one link on this page is vulnerable to Reverse tabnabbing as it uses a target attribute without using both of the \"noopener\" and \"noreferrer\" keywords in the \"rel\" attribute, which allows the target page to take control of this page.",
        "category": "Reverse Tabnabbing",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "102",
            "zap_solution": "Do not use a target attribute, or if you have to then also add the attribute: rel=\"noopener noreferrer\".",
            "zap_otherinfo": null,
            "zap_reference": "https://owasp.org/www-community/attacks/Reverse_Tabnabbinghttps://dev.to/ben/the-targetblank-vulnerability-by-examplehttps://mathiasbynens.github.io/rel-noopener/https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c",
            "zap_cweid": null,
            "zap_wascid": null,
            "zap_riskcode": "2",
            "zap_pluginid": "10108",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-valve.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jasper-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/transport.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/introduction.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/membership.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/credentialhandler.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/cgi-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/filter.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/ssi-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/developers.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/realm-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/http.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/index.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-objects.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/cluster-howto.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/changelog.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-receiver.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/setup.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/tribes/interceptors.html",
                    "method": "GET",
                    "evidence": "<a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"../images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a>"
                }
            ]
        },
        "id": "dd0fbfe5-2fad-4293-8ee5-5ee88ccb290a"
    },
    {
        "name": "Source Code Disclosure - Servlet",
        "description": "Application Source Code was disclosed by the web server - Servlet",
        "category": "Source Code Disclosure - Servlet",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "2",
            "zap_solution": "Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. ",
            "zap_otherinfo": "public class ChatServlet    extends HttpServlet",
            "zap_reference": "http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/",
            "zap_cweid": "540",
            "zap_wascid": "13",
            "zap_riskcode": "2",
            "zap_pluginid": "10099",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/aio.html",
                    "method": "GET",
                    "evidence": "public class ChatServlet\n    extends HttpServlet"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsptoserv/ServletToJsp.java.html",
                    "method": "GET",
                    "evidence": "import javax.servlet.http.HttpServlet;"
                }
            ]
        },
        "id": "f409b8b4-4f6d-4abd-b57d-36286e39728a"
    },
    {
        "name": "Non-Storable Content",
        "description": "The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.",
        "category": "Non-Storable Content",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "8",
            "zap_solution": "The content may be marked as storable by ensuring that the following conditions are satisfied:The request method must be understood by the cache and defined as being cacheable (\"GET\", \"HEAD\", and \"POST\" are currently defined as cacheable)The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)The \"no-store\" cache directive must not appear in the request or response header fieldsFor caching by \"shared\" caches such as \"proxy\" caches, the \"private\" response directive must not appear in the responseFor caching by \"shared\" caches such as \"proxy\" caches, the \"Authorization\" header field must not appear in the request, unless the response explicitly allows it (using one of the \"must-revalidate\", \"public\", or \"s-maxage\" Cache-Control response directives)In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:It must contain an \"Expires\" header fieldIt must contain a \"max-age\" response directiveFor \"shared\" caches such as \"proxy\" caches, it must contain a \"s-maxage\" response directiveIt must contain a \"Cache Control Extension\" that allows it to be cachedIt must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).   ",
            "zap_otherinfo": null,
            "zap_reference": "https://tools.ietf.org/html/rfc7234https://tools.ietf.org/html/rfc7231http://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html (obsoleted by rfc7234)",
            "zap_cweid": "524",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10049",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets",
                    "method": "GET",
                    "evidence": "302"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/host-manager/html",
                    "method": "GET",
                    "evidence": "private"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/index.jsp",
                    "method": "GET",
                    "evidence": "private"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/manager/html",
                    "method": "GET",
                    "evidence": "private"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/chat/",
                    "method": "GET",
                    "evidence": "302"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/manager/status",
                    "method": "GET",
                    "evidence": "private"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/error/err.jsp?name=ZAP&submit=Submit",
                    "method": "GET",
                    "evidence": "500"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp",
                    "method": "GET",
                    "evidence": "302"
                }
            ]
        },
        "id": "ec6ab4d9-0ba6-4638-a17d-3d61c1f4b64c"
    },
    {
        "name": "Anti CSRF Tokens Scanner",
        "description": "A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.CSRF attacks are effective in a number of situations, including:    * The victim has an active session on the target site.    * The victim is authenticated via HTTP auth on the target site.    * The victim is on the same local network as the target site.CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.",
        "category": "Anti CSRF Tokens Scanner",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "HIGH",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "26",
            "zap_solution": "Phase: Architecture and DesignUse a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.For example, use anti-CSRF packages such as the OWASP CSRFGuard.Phase: ImplementationEnsure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.Phase: Architecture and DesignGenerate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).Note that this can be bypassed using XSS.Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.Note that this can be bypassed using XSS.Use the ESAPI Session Management control.This control includes a component for CSRF.Do not use the GET method for any request that triggers a state change.Phase: ImplementationCheck the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.",
            "zap_otherinfo": null,
            "zap_reference": "http://projects.webappsec.org/Cross-Site-Request-Forgeryhttp://cwe.mitre.org/data/definitions/352.html",
            "zap_cweid": "352",
            "zap_wascid": "9",
            "zap_riskcode": "3",
            "zap_pluginid": "20012",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colors.html",
                    "method": "GET",
                    "evidence": "<form method=GET action=colrs.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/checkbox/check.html",
                    "method": "GET",
                    "evidence": "<FORM TYPE=POST ACTION=checkresult.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/index.jsp",
                    "method": "GET",
                    "evidence": "<form method=\"POST\" action='j_security_check' >"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Hint&color1=ZAP&color2=ZAP",
                    "method": "GET",
                    "evidence": "<form method=POST action=colrs.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/error/error.html",
                    "method": "GET",
                    "evidence": "<form method=get action=err.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/cal1.jsp?action=Submit&email=foo-bar%40example.com&name=ZAP",
                    "method": "GET",
                    "evidence": "<FORM METHOD=POST ACTION=cal1.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected",
                    "method": "GET",
                    "evidence": "<form method=\"POST\" action='j_security_check' >"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5",
                    "method": "POST",
                    "evidence": "<form action=\"SessionExample\" method=GET>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5\" method=GET>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "evidence": "<form action=\"CookieExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/login.html",
                    "method": "GET",
                    "evidence": "<form method=GET action=cal1.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/num/numguess.jsp?guess=ZAP",
                    "method": "GET",
                    "evidence": "<form method=get>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/num/numguess.jsp",
                    "method": "GET",
                    "evidence": "<form method=get>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestParamExample",
                    "method": "POST",
                    "evidence": "<form action=\"RequestParamExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.jsp?foo=bar",
                    "method": "GET",
                    "evidence": "<form action=\"implicit-objects.jsp\" method=\"GET\">"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/functions.jsp?foo=JSP+2.0",
                    "method": "GET",
                    "evidence": "<form action=\"functions.jsp\" method=\"GET\">"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/chat/login.jsp",
                    "method": "GET",
                    "evidence": "<form method=\"POST\" action='chat' target=\"_top\" name=\"loginForm\">"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.html",
                    "method": "GET",
                    "evidence": "<form type=POST action=carts.jsp>"
                }
            ]
        },
        "id": "b3371d31-4f1d-48e0-a36f-0b1eca61ccda"
    },
    {
        "name": "Source Code Disclosure - ActiveVFP",
        "description": "Application Source Code was disclosed by the web server - ActiveVFP",
        "category": "Source Code Disclosure - ActiveVFP",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. ",
            "zap_otherinfo": "if (!thisScript) { // Workaround for IE         var scripts = document.getElementsByTagName(\"script\");        thisScript = scripts[scripts.length - 1];      }      document.addEventListener(\"DOMContentLoaded\", (function() {        var commentsDiv = document.getElementById(\"comments_thread\");        var commentsShortname = \"tomcat\";        var commentsIdentifier = \"http://tomcat.apache.org/\" +          thisScript.getAttribute(\"data-comments-identifier\") + \".html\";        (function(w, d) {          if (w.location.hostname.toLowerCase() == \"tomcat.apache.org\") {            var s = d.createElement(\"script\");            s.type = \"application/javascript\";            s.async = true;            s.src = \"https://comments.apache.org/show_comments.lua?site=\" +              encodeURIComponent(commentsShortname) +              \"&page=\" + encodeURIComponent(commentsIdentifier);            d.head.appendChild(s);          } else {            commentsDiv.appendChild(d.createTextNode(\"Comments are disabled for this page at the moment.\"));          }        })(window, document);      }), false);    })();  Apache Tomcat 8          Version 8.0.37,          Sep 1 2016LinksDocs HomeFAQUser CommentsUser Guide1) Introduction2) Setup3) First webapp4) Deployer5) Manager6) Realms and AAA7) Security Manager8) JNDI Resources9) JDBC DataSources10) Classloading11) JSPs12) SSL/TLS13) SSI14) CGI15) Proxy Support16) MBeans Descriptors17) Default Servlet18) Clustering19) Load Balancer20) Connectors21) Monitoring and Management22) Logging23) APR/Native24) Virtual Hosting25) Advanced IO26) Additional Components27) Mavenized28) Security Considerations29) Windows Service30) Windows Authentication31) Tomcat's JDBC Pool32) WebSocket33) RewriteReferenceRelease NotesConfigurationTomcat JavadocsServlet JavadocsJSP 2.3 JavadocsEL 3.0 JavadocsWebSocket 1.1 JavadocsJK 1.2 DocumentationApache Tomcat DevelopmentBuildingChangelogStatusDevelopersArchitectureFunctional Specs.TribesSSI How ToTable of ContentsIntroductionInstallationServlet ConfigurationFilter ConfigurationDirectivesVariablesIntroductionSSI (Server Side Includes) are directives that are placed in HTML pages,and evaluated on the server while the pages are being served. They let youadd dynamically generated content to an existing HTML page, without havingto serve the entire page via a CGI program, or other dynamic technology.Within Tomcat SSI support can be added when using Tomcat as yourHTTP server and you require SSI support.  Typically this is doneduring development when you don't want to run a web server like Apache.Tomcat SSI support implements the same SSI directives as Apache.  See theApache Introduction to SSI for information on using SSI directives.SSI support is available as a servlet and as a filter. You should use oneor the other to provide SSI support but not both.Servlet based SSI support is implemented using the classorg.apache.catalina.ssi.SSIServlet.  Traditionally, this servletis mapped to the URL pattern \"*.shtml\".Filter based SSI support is implemented using the classorg.apache.catalina.ssi.SSIFilter.  Traditionally, this filteris mapped to the URL pattern \"*.shtml\", though it can be mapped to \"*\" asit will selectively enable/disable SSI processing based on mime types.  ThecontentType init param allows you to apply SSI processing to JSP pages,javascript, or any other content you wish.By default SSI support is disabled in Tomcat.InstallationCAUTION - SSI directives can be used to execute programsexternal to the Tomcat JVM. If you are using the Java SecurityManager thiswill bypass your security policy configuration in catalina.policy.To use the SSI servlet, remove the XML comments from around the SSI servletand servlet-mapping configuration in$CATALINA_BASE/conf/web.xml.To use the SSI filter, remove the XML comments from around the SSI filterand filter-mapping configuration in$CATALINA_BASE/conf/web.xml.Only Contexts which are marked as privileged may use SSI features (see theprivileged property of the Context element).Servlet ConfigurationThere are several servlet init parameters which can be used toconfigure the behaviour of the SSI servlet.buffered - Should output from this servlet be buffered?(0=false, 1=true) Default 0 (false).debug - Debugging detail level for messages loggedby this servlet. Default 0.expires - The number of seconds before a page with SSIdirectives will expire. Default behaviour is for all SSI directives to beevaluated for every request.isVirtualWebappRelative - Should \"virtual\" SSI directivepaths be interpreted as relative to the context root, instead of the serverroot? Default false.inputEncoding - The encoding to be assumed for SSIresources if one cannot be determined from the resource itself. Default isthe default platform encoding.outputEncoding - The encoding to be used for the resultof the SSI processing. Default is UTF-8.allowExec - Is the exec command enabled? Default isfalse.Filter ConfigurationThere are several filter init parameters which can be used toconfigure the behaviour of the SSI filter.contentType - A regex pattern that must be matched beforeSSI processing is applied. When crafting your own pattern, don't forget that amime content type may be followed by an optional character set in the form\"mime/type; charset=set\" that you must take into account.  Default is\"text/x-server-parsed-html(;.*)?\".debug - Debugging detail level for messages loggedby this servlet. Default 0.expires - The number of seconds before a page with SSIdirectives will expire. Default behaviour is for all SSI directives to beevaluated for every request.isVirtualWebappRelative - Should \"virtual\" SSI directivepaths be interpreted as relative to the context root, instead of the serverroot? Default false.allowExec - Is the exec command enabled? Default isfalse.DirectivesServer Side Includes are invoked by embedding SSI directives in an HTML document whose type will be processed by the SSI servlet. The directives take the form of an HTML comment. The directive is replaced by the results of interpreting it before sending the page to the client. The general form of a directive is:  &lt;!--#directive [parm=value] --&gt;The directives are:config - &lt;!--#config timefmt=\"%B %Y\" --&gt;Used to set the format of dates and other items processed by SSIecho -   &lt;!--#echo var=\"VARIABLE_NAME\" --&gt;will be replaced by the value of the variable.exec -  Used to run commands on the host system.include -  &lt;!--#include virtual=\"file-name\" --&gt;inserts the contentsflastmod - &lt;!--#flastmod file=\"filename.shtml\" --&gt;Returns the time that a file was lost modified.fsize - &lt;!--#fsize file=\"filename.shtml\" --&gt;Returns the size of a file.printenv - &lt;!--#printenv --&gt;Returns the list of all the defined variables.set - &lt;!--#set var=\"foo\" value=\"Bar\" --&gt;is used to assign a value to a user-defined variable.if elif endif",
            "zap_reference": "http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/",
            "zap_cweid": "540",
            "zap_wascid": "13",
            "zap_riskcode": "2",
            "zap_pluginid": "10099",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/ssi-howto.html",
                    "method": "GET",
                    "evidence": "if (!thisScript) { // Workaround for IE <= 11\n        var scripts = document.getElementsByTagName(\"script\");\n        thisScript = scripts[scripts.length - 1];\n      }\n      document.addEventListener(\"DOMContentLoaded\", (function() {\n        var commentsDiv = document.getElementById(\"comments_thread\");\n        var commentsShortname = \"tomcat\";\n        var commentsIdentifier = \"http://tomcat.apache.org/\" +\n          thisScript.getAttribute(\"data-comments-identifier\") + \".html\";\n\n        (function(w, d) {\n          if (w.location.hostname.toLowerCase() == \"tomcat.apache.org\") {\n            var s = d.createElement(\"script\");\n            s.type = \"application/javascript\";\n            s.async = true;\n            s.src = \"https://comments.apache.org/show_comments.lua?site=\" +\n              encodeURIComponent(commentsShortname) +\n              \"&page=\" + encodeURIComponent(commentsIdentifier);\n            d.head.appendChild(s);\n          } else {\n            commentsDiv.appendChild(d.createTextNode(\"Comments are disabled for this page at the moment.\"));\n          }\n        })(window, document);\n      }), false);\n    })();\n  </script></head><body><div id=\"wrapper\"><header><div id=\"header\"><div><div><div class=\"logo noPrint\"><a href=\"http://tomcat.apache.org/\"><img alt=\"Tomcat Home\" src=\"./images/tomcat.png\"></a></div><div style=\"height: 1px;\"></div><div class=\"asfLogo noPrint\"><a href=\"http://www.apache.org/\" target=\"_blank\"><img src=\"./images/asf-feather.png\" alt=\"The Apache Software Foundation\" style=\"width: 266px; height: 83px;\"></a></div><h1>Apache Tomcat 8</h1><div class=\"versionInfo\">\n          Version 8.0.37,\n          <time datetime=\"2016-09-01\">Sep 1 2016</time></div><div style=\"height: 1px;\"></div><div style=\"clear: left;\"></div></div></div></div></header><div id=\"middle\"><div><div id=\"mainLeft\" class=\"noprint\"><div><nav><div><h2>Links</h2><ul><li><a href=\"index.html\">Docs Home</a></li><li><a href=\"http://wiki.apache.org/tomcat/FAQ\">FAQ</a></li><li><a href=\"#comments_section\">User Comments</a></li></ul></div><div><h2>User Guide</h2><ul><li><a href=\"introduction.html\">1) Introduction</a></li><li><a href=\"setup.html\">2) Setup</a></li><li><a href=\"appdev/index.html\">3) First webapp</a></li><li><a href=\"deployer-howto.html\">4) Deployer</a></li><li><a href=\"manager-howto.html\">5) Manager</a></li><li><a href=\"realm-howto.html\">6) Realms and AAA</a></li><li><a href=\"security-manager-howto.html\">7) Security Manager</a></li><li><a href=\"jndi-resources-howto.html\">8) JNDI Resources</a></li><li><a href=\"jndi-datasource-examples-howto.html\">9) JDBC DataSources</a></li><li><a href=\"class-loader-howto.html\">10) Classloading</a></li><li><a href=\"jasper-howto.html\">11) JSPs</a></li><li><a href=\"ssl-howto.html\">12) SSL/TLS</a></li><li><a href=\"ssi-howto.html\">13) SSI</a></li><li><a href=\"cgi-howto.html\">14) CGI</a></li><li><a href=\"proxy-howto.html\">15) Proxy Support</a></li><li><a href=\"mbeans-descriptors-howto.html\">16) MBeans Descriptors</a></li><li><a href=\"default-servlet.html\">17) Default Servlet</a></li><li><a href=\"cluster-howto.html\">18) Clustering</a></li><li><a href=\"balancer-howto.html\">19) Load Balancer</a></li><li><a href=\"connectors.html\">20) Connectors</a></li><li><a href=\"monitoring.html\">21) Monitoring and Management</a></li><li><a href=\"logging.html\">22) Logging</a></li><li><a href=\"apr.html\">23) APR/Native</a></li><li><a href=\"virtual-hosting-howto.html\">24) Virtual Hosting</a></li><li><a href=\"aio.html\">25) Advanced IO</a></li><li><a href=\"extras.html\">26) Additional Components</a></li><li><a href=\"maven-jars.html\">27) Mavenized</a></li><li><a href=\"security-howto.html\">28) Security Considerations</a></li><li><a href=\"windows-service-howto.html\">29) Windows Service</a></li><li><a href=\"windows-auth-howto.html\">30) Windows Authentication</a></li><li><a href=\"jdbc-pool.html\">31) Tomcat's JDBC Pool</a></li><li><a href=\"web-socket-howto.html\">32) WebSocket</a></li><li><a href=\"rewrite.html\">33) Rewrite</a></li></ul></div><div><h2>Reference</h2><ul><li><a href=\"RELEASE-NOTES.txt\">Release Notes</a></li><li><a href=\"config/index.html\">Configuration</a></li><li><a href=\"api/index.html\">Tomcat Javadocs</a></li><li><a href=\"servletapi/index.html\">Servlet Javadocs</a></li><li><a href=\"jspapi/index.html\">JSP 2.3 Javadocs</a></li><li><a href=\"elapi/index.html\">EL 3.0 Javadocs</a></li><li><a href=\"websocketapi/index.html\">WebSocket 1.1 Javadocs</a></li><li><a href=\"http://tomcat.apache.org/connectors-doc/\">JK 1.2 Documentation</a></li></ul></div><div><h2>Apache Tomcat Development</h2><ul><li><a href=\"building.html\">Building</a></li><li><a href=\"changelog.html\">Changelog</a></li><li><a href=\"http://wiki.apache.org/tomcat/TomcatVersions\">Status</a></li><li><a href=\"developers.html\">Developers</a></li><li><a href=\"architecture/index.html\">Architecture</a></li><li><a href=\"funcspecs/index.html\">Functional Specs.</a></li><li><a href=\"tribes/introduction.html\">Tribes</a></li></ul></div></nav></div></div><div id=\"mainRight\"><div id=\"content\"><h2>SSI How To</h2><h3 id=\"Table_of_Contents\">Table of Contents</h3><div class=\"text\">\n<ul><li><a href=\"#Introduction\">Introduction</a></li><li><a href=\"#Installation\">Installation</a></li><li><a href=\"#Servlet_Configuration\">Servlet Configuration</a></li><li><a href=\"#Filter_Configuration\">Filter Configuration</a></li><li><a href=\"#Directives\">Directives</a></li><li><a href=\"#Variables\">Variables</a></li></ul>\n</div><h3 id=\"Introduction\">Introduction</h3><div class=\"text\">\n\n<p>SSI (Server Side Includes) are directives that are placed in HTML pages,\nand evaluated on the server while the pages are being served. They let you\nadd dynamically generated content to an existing HTML page, without having\nto serve the entire page via a CGI program, or other dynamic technology.\n</p>\n\n<p>Within Tomcat SSI support can be added when using Tomcat as your\nHTTP server and you require SSI support.  Typically this is done\nduring development when you don't want to run a web server like Apache.</p>\n\n<p>Tomcat SSI support implements the same SSI directives as Apache.  See the\n<a href=\"http://httpd.apache.org/docs/howto/ssi.html#basicssidirectives\">\nApache Introduction to SSI</a> for information on using SSI directives.</p>\n\n<p>SSI support is available as a servlet and as a filter. You should use one\nor the other to provide SSI support but not both.</p>\n\n<p>Servlet based SSI support is implemented using the class\n<code>org.apache.catalina.ssi.SSIServlet</code>.  Traditionally, this servlet\nis mapped to the URL pattern \"*.shtml\".</p>\n\n<p>Filter based SSI support is implemented using the class\n<code>org.apache.catalina.ssi.SSIFilter</code>.  Traditionally, this filter\nis mapped to the URL pattern \"*.shtml\", though it can be mapped to \"*\" as\nit will selectively enable/disable SSI processing based on mime types.  The\ncontentType init param allows you to apply SSI processing to JSP pages,\njavascript, or any other content you wish.</p>\n<p>By default SSI support is disabled in Tomcat.</p>\n</div><h3 id=\"Installation\">Installation</h3><div class=\"text\">\n\n<p><strong>CAUTION</strong> - SSI directives can be used to execute programs\nexternal to the Tomcat JVM. If you are using the Java SecurityManager this\nwill bypass your security policy configuration in <code>catalina.policy.</code>\n</p>\n\n<p>To use the SSI servlet, remove the XML comments from around the SSI servlet\nand servlet-mapping configuration in\n<code>$CATALINA_BASE/conf/web.xml</code>.</p>\n\n<p>To use the SSI filter, remove the XML comments from around the SSI filter\nand filter-mapping configuration in\n<code>$CATALINA_BASE/conf/web.xml</code>.</p>\n\n<p>Only Contexts which are marked as privileged may use SSI features (see the\nprivileged property of the Context element).</p>\n\n</div><h3 id=\"Servlet_Configuration\">Servlet Configuration</h3><div class=\"text\">\n\n<p>There are several servlet init parameters which can be used to\nconfigure the behaviour of the SSI servlet.</p>\n<ul>\n<li><strong>buffered</strong> - Should output from this servlet be buffered?\n(0=false, 1=true) Default 0 (false).</li>\n<li><strong>debug</strong> - Debugging detail level for messages logged\nby this servlet. Default 0.</li>\n<li><strong>expires</strong> - The number of seconds before a page with SSI\ndirectives will expire. Default behaviour is for all SSI directives to be\nevaluated for every request.</li>\n<li><strong>isVirtualWebappRelative</strong> - Should \"virtual\" SSI directive\npaths be interpreted as relative to the context root, instead of the server\nroot? Default false.</li>\n<li><strong>inputEncoding</strong> - The encoding to be assumed for SSI\nresources if one cannot be determined from the resource itself. Default is\nthe default platform encoding.</li>\n<li><strong>outputEncoding</strong> - The encoding to be used for the result\nof the SSI processing. Default is UTF-8.</li>\n<li><strong>allowExec</strong> - Is the exec command enabled? Default is\nfalse.</li>\n</ul>\n\n\n</div><h3 id=\"Filter_Configuration\">Filter Configuration</h3><div class=\"text\">\n\n<p>There are several filter init parameters which can be used to\nconfigure the behaviour of the SSI filter.</p>\n<ul>\n<li><strong>contentType</strong> - A regex pattern that must be matched before\nSSI processing is applied. When crafting your own pattern, don't forget that a\nmime content type may be followed by an optional character set in the form\n\"mime/type; charset=set\" that you must take into account.  Default is\n\"text/x-server-parsed-html(;.*)?\".</li>\n<li><strong>debug</strong> - Debugging detail level for messages logged\nby this servlet. Default 0.</li>\n<li><strong>expires</strong> - The number of seconds before a page with SSI\ndirectives will expire. Default behaviour is for all SSI directives to be\nevaluated for every request.</li>\n<li><strong>isVirtualWebappRelative</strong> - Should \"virtual\" SSI directive\npaths be interpreted as relative to the context root, instead of the server\nroot? Default false.</li>\n<li><strong>allowExec</strong> - Is the exec command enabled? Default is\nfalse.</li>\n</ul>\n\n\n</div><h3 id=\"Directives\">Directives</h3><div class=\"text\">\n<p>Server Side Includes are invoked by embedding SSI directives in an HTML document\n whose type will be processed by the SSI servlet. The directives take the form of an HTML\n comment. The directive is replaced by the results of interpreting it before sending the\n page to the client. The general form of a directive is: </p>\n<p> <code>&lt;!--#directive [parm=value] --&gt;</code></p>\n<p>The directives are:</p>\n<ul>\n<li>\n<strong>config</strong> - <code>&lt;!--#config timefmt=\"%B %Y\" --&gt;</code>\nUsed to set the format of dates and other items processed by SSI\n</li>\n<li>\n<strong>echo</strong> -   <code>&lt;!--#echo var=\"VARIABLE_NAME\" --&gt;</code>\nwill be replaced by the value of the variable.\n</li>\n<li>\n<strong>exec</strong> -  Used to run commands on the host system.\n</li>\n<li>\n<strong>include</strong> -  <code>&lt;!--#include virtual=\"file-name\" --&gt;</code>\ninserts the contents\n</li>\n<li>\n<strong>flastmod</strong> - <code>&lt;!--#flastmod file=\"filename.shtml\" --&gt;</code>\nReturns the time that a file was lost modified.\n</li>\n<li>\n<strong>fsize</strong> - <code>&lt;!--#fsize file=\"filename.shtml\" --&gt;</code>\nReturns the size of a file.\n</li>\n<li>\n<strong>printenv</strong> - <code>&lt;!--#printenv --&gt;</code>\nReturns the list of all the defined variables.\n</li>\n<li>\n<strong>set</strong> - <code>&lt;!--#set var=\"foo\" value=\"Bar\" --&gt;</code>\nis used to assign a value to a user-defined variable.\n</li>\n<li>\n<strong>if elif endif"
                }
            ]
        },
        "id": "aae8b68d-539a-4001-96d7-4f5b43418b32"
    },
    {
        "name": "Backup File Disclosure",
        "description": "A backup of the file was disclosed by the web server",
        "category": "Backup File Disclosure",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "30",
            "zap_solution": "Do not edit files in-situ on the web server, and ensure that un-necessary files (including hidden files) are removed from the web server.",
            "zap_otherinfo": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP",
            "zap_reference": "https://cwe.mitre.org/data/definitions/530.htmlhttps://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/04-Review_Old_Backup_and_Unreferenced_Files_for_Sensitive_Information.html",
            "zap_cweid": "530",
            "zap_wascid": "34",
            "zap_riskcode": "2",
            "zap_pluginid": "10095",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.log",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.log",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.log]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5%20-%20Copy%20(3)",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5 - Copy (3)",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5 - Copy (3)]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.zip",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.zip",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.zip]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5%20-%20Copy%20(3)",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5 - Copy (3)",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5 - Copy (3)]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.bak",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.bak",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.bak]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.jar",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.jar",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.jar]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.zip",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.zip",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.zip]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5backup",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5backup",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5backup]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.tar",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.tar",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.tar]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.log",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.log",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.log]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.old",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.old",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.old]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.swp",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.swp",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.swp]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.backup",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.backup",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.backup]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.old",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.old",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.old]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.jar",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.jar",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.jar]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.backup",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.backup",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.backup]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.swp",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.swp",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.swp]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.tar",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.tar",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.tar]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5backup",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5backup",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5backup]"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.~bk",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.~bk",
                    "evidence": "A backup of [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP] is available at [http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5.~bk]"
                }
            ]
        },
        "id": "3115a4a2-859f-48ce-aa66-2e1f8c84bedb"
    },
    {
        "name": "Cookie Poisoning",
        "description": "This check looks at user-supplied input in query string parameters and POST data to identify where cookie parameters might be controlled. This is called a cookie poisoning attack, and becomes exploitable when an attacker can manipulate the cookie in various ways. In some cases this will not be exploitable, however, allowing URL parameters to set cookie values is generally considered a bug.",
        "category": "Cookie Poisoning",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "2",
            "zap_solution": "Do not allow user input to control cookie names and values. If some query string parameters must be set in cookie values, be sure to filter out semicolon's that can serve as name/value pair delimiters.",
            "zap_otherinfo": "An attacker may be able to poison cookie values through POST parameters. To test if this is a more serious issue, you should try resending that request as a GET, with the POST parameter included as a query string parameter. For example:  http://nottrusted.com/page?value=maliciousInput.This was identified at:http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExampleUser-input was found in the following cookie:ZAP=ZAP; Path=/examples/The user input was:cookievalue=ZAP",
            "zap_reference": "http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-cookie",
            "zap_cweid": "20",
            "zap_wascid": "20",
            "zap_riskcode": "0",
            "zap_pluginid": "10029",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "cookievalue"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "cookiename"
                }
            ]
        },
        "id": "3feb25bb-29a7-4376-b385-4c5918708b2f"
    },
    {
        "name": "Source Code Disclosure - SQL",
        "description": "Application Source Code was disclosed by the web server - SQL",
        "category": "Source Code Disclosure - SQL",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "9",
            "zap_solution": "Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server. ",
            "zap_otherinfo": "create table tomcat_sessions (  session_id     varchar(100)",
            "zap_reference": "http://blogs.wsj.com/cio/2013/10/08/adobe-source-code-leak-is-bad-news-for-u-s-government/",
            "zap_cweid": "540",
            "zap_wascid": "13",
            "zap_riskcode": "2",
            "zap_pluginid": "10099",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/manager.html",
                    "method": "GET",
                    "evidence": "create table tomcat_sessions (\n  session_id     varchar(100)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/",
                    "method": "GET",
                    "evidence": "Select one of the links from the navigation menu "
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jndi-datasource-examples-howto.html",
                    "method": "GET",
                    "evidence": "select * from testdata"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-memory-realm.html",
                    "method": "GET",
                    "evidence": "Select the one and only \"user\" instance from the in"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/index.html",
                    "method": "GET",
                    "evidence": "Select one of the links from the navigation menu "
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/extras.html",
                    "method": "GET",
                    "evidence": "select \"Browse\" from the Quick Navigation Links. The extras components"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/realm-howto.html",
                    "method": "GET",
                    "evidence": "create table users (\n  user_name         varchar(15)"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jdbc-pool.html",
                    "method": "GET",
                    "evidence": "select 1 from dual"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-jdbc-realm.html",
                    "method": "GET",
                    "evidence": "Select the one and only row from the user"
                }
            ]
        },
        "id": "ba3451cc-e786-46d4-85d4-86f3c9dc3f06"
    },
    {
        "name": "Cookie Without SameSite Attribute",
        "description": "A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.",
        "category": "Cookie Without SameSite Attribute",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "4",
            "zap_solution": "Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.",
            "zap_otherinfo": null,
            "zap_reference": "https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site",
            "zap_cweid": "16",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10054",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "GET",
                    "param": "JSESSIONID",
                    "evidence": "Set-Cookie: JSESSIONID"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "ZAP",
                    "evidence": "Set-Cookie: ZAP"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/basic-arithmetic.jsp",
                    "method": "GET",
                    "param": "JSESSIONID",
                    "evidence": "Set-Cookie: JSESSIONID"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/index.jsp",
                    "method": "GET",
                    "param": "JSESSIONID",
                    "evidence": "Set-Cookie: JSESSIONID"
                }
            ]
        },
        "id": "c538e701-a324-46ec-9547-ed31efbbe9da"
    },
    {
        "name": "Application Error Disclosure",
        "description": "This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.",
        "category": "Application Error Disclosure",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.",
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "90022",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/error/err.jsp?name=ZAP&submit=Submit",
                    "method": "GET",
                    "evidence": "HTTP/1.1 500 Internal Server Error"
                }
            ]
        },
        "id": "179bcd78-cdd9-460c-bca4-18e7d9b76d05"
    },
    {
        "name": "Information Disclosure - Suspicious Comments",
        "description": "The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.",
        "category": "Information Disclosure - Suspicious Comments",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "2",
            "zap_solution": "Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.",
            "zap_otherinfo": "The following comment/snippet was identified via the pattern: \\bADMINISTRATOR\\b         String constants used within your application, which         can be customized by the system administrator who is         installing your application.  The values actually         assigned to these parameters can be retrieved in a         servlet or JSP page by calling:             String value =               getServletContext().getInitParameter(\"name\");         where \"name\" matches the  element of         one of these initialization parameters.         You can define any number of context initialization         parameters, including zero.    -->The following comment/snippet was identified via the pattern: \\bWHERE\\b         your web application, including initialization         parameters.  With Tomcat, you can also send requests         to servlets not listed here with a request like this:           http://localhost:8080/{context-path}/servlet/{classname}         but this usage is not guaranteed to be portable.  It also         makes relative references to images and other resources         required by your servlet more complicated, so defining         all of your servlets (and defining a mapping to them with         a servlet-mapping element) is recommended.         Servlet initialization parameters can be retrieved in a         servlet or JSP page by calling:             String value =               getServletConfig().getInitParameter(\"name\");         where \"name\" matches the  element of         one of these initialization parameters.         You can define any number of servlets, including zero.    -->The following comment/snippet was identified via the pattern: \\bFROM\\b         in minutes.  From a servlet or JSP page, you can modify         the timeout for a particular session dynamically by using         HttpSession.getMaxInactiveInterval(). -->",
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10027",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/web.xml.txt",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/build.xml.txt",
                    "method": "GET"
                }
            ]
        },
        "id": "d74dc9c2-064f-46fb-a270-f554b2b53a69"
    },
    {
        "name": "Relative Path Confusion",
        "description": "The web server is configured to serve responses to ambiguous URLs in a manner that is likely to lead to confusion about the correct \"relative path\" for the URL. Resources (CSS, images, etc.) are also specified in the page response using relative, rather than absolute URLs. In an attack, if the web browser parses the \"cross-content\" response in a permissive manner, or can be tricked into permissively parsing the \"cross-content\" response, using techniques such as framing, then the web browser may be fooled into interpreting HTML as CSS (or other content types), leading to an XSS vulnerability.",
        "category": "Relative Path Confusion",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "2",
            "zap_solution": "Web servers and frameworks should be updated to be configured to not serve responses to ambiguous URLs in such a way that the relative path of such URLs could be mis-interpreted by components on either the client side, or server side.Within the application, the correct use of the \"\" HTML tag in the HTTP response will unambiguously specify the base URL for all relative URLs in the document.Use the \"Content-Type\" HTTP response header to make it harder for the attacker to force the web browser to mis-interpret the content type of the response.Use the \"X-Content-Type-Options: nosniff\" HTTP response header to prevent the web browser from \"sniffing\" the content type of the response.Use a modern DOCTYPE such as \"\" to prevent the page from being rendered in the web browser using \"Quirks Mode\", since this results in the content type being ignored by the web browser.Specify the \"X-Frame-Options\" HTTP response header to prevent Quirks Mode from being enabled in the web browser using framing attacks. ",
            "zap_otherinfo": "No  tag was specified in the HTML  tag to define the location for relative URLs.A Content Type of \"text/html;charset=ISO-8859-1\" was specified. If the web browser is employing strict parsing rules, this will prevent cross-content attacks from succeeding. Quirks Mode in the web browser would disable strict parsing.  Quirks Mode is implicitly enabled via the absence of a DOCTYPE, allowing the specified Content Type to be bypassed.",
            "zap_reference": "http://www.thespanner.co.uk/2014/03/21/rpo/https://hsivonen.fi/doctype/http://www.w3schools.com/tags/tag_base.asp",
            "zap_cweid": "20",
            "zap_wascid": "20",
            "zap_riskcode": "2",
            "zap_pluginid": "10051",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/index.jsp",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/index.jsp/ezusw/0t643",
                    "evidence": "<form method=\"POST\" action=\"j_security_check\"> \n <table border=\"0\" cellspacing=\"5\"> \n  <tbody>\n   <tr> \n    <th align=\"right\">Username:</th> \n    <td align=\"left\"><input type=\"text\" name=\"j_username\"></td> \n   </tr> \n   <tr> \n    <th align=\"right\">Password:</th> \n    <td align=\"left\"><input type=\"password\" name=\"j_password\"></td> \n   </tr> \n   <tr> \n    <td align=\"right\"><input type=\"submit\" value=\"Log In\"></td> \n    <td align=\"left\"><input type=\"reset\"></td> \n   </tr> \n  </tbody>\n </table> \n</form>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-manager.html#The_<Manager>",
                    "method": "GET",
                    "attack": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-manager.html",
                    "evidence": "<link href=\"../images/docs-stylesheet.css\" rel=\"stylesheet\" type=\"text/css\">"
                }
            ]
        },
        "id": "9223fafd-bdbc-40da-a44c-78012f9e6e9e"
    },
    {
        "name": "Absence of Anti-CSRF Tokens",
        "description": "No Anti-CSRF tokens were found in a HTML submission form.A cross-site request forgery is an attack that involves forcing a victim to send an HTTP request to a target destination without their knowledge or intent in order to perform an action as the victim. The underlying cause is application functionality using predictable URL/form actions in a repeatable way. The nature of the attack is that CSRF exploits the trust that a web site has for a user. By contrast, cross-site scripting (XSS) exploits the trust that a user has for a web site. Like XSS, CSRF attacks are not necessarily cross-site, but they can be. Cross-site request forgery is also known as CSRF, XSRF, one-click attack, session riding, confused deputy, and sea surf.CSRF attacks are effective in a number of situations, including:    * The victim has an active session on the target site.    * The victim is authenticated via HTTP auth on the target site.    * The victim is on the same local network as the target site.CSRF has primarily been used to perform an action against a target site using the victim's privileges, but recent techniques have been discovered to disclose information by gaining access to the response. The risk of information disclosure is dramatically increased when the target site is vulnerable to XSS, because XSS can be used as a platform for CSRF, allowing the attack to operate within the bounds of the same-origin policy.",
        "category": "Absence of Anti-CSRF Tokens",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "29",
            "zap_solution": "Phase: Architecture and DesignUse a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.For example, use anti-CSRF packages such as the OWASP CSRFGuard.Phase: ImplementationEnsure that your application is free of cross-site scripting issues, because most CSRF defenses can be bypassed using attacker-controlled script.Phase: Architecture and DesignGenerate a unique nonce for each form, place the nonce into the form, and verify the nonce upon receipt of the form. Be sure that the nonce is not predictable (CWE-330).Note that this can be bypassed using XSS.Identify especially dangerous operations. When the user performs a dangerous operation, send a separate confirmation request to ensure that the user intended to perform that operation.Note that this can be bypassed using XSS.Use the ESAPI Session Management control.This control includes a component for CSRF.Do not use the GET method for any request that triggers a state change.Phase: ImplementationCheck the HTTP Referer header to see if the request originated from an expected page. This could break legitimate functionality, because users or proxies may have disabled sending the Referer for privacy reasons.",
            "zap_otherinfo": "No known Anti-CSRF token [anticsrf, CSRFToken, __RequestVerificationToken, csrfmiddlewaretoken, authenticity_token, OWASP_CSRFTOKEN, anoncsrf, csrf_token, _csrf, _csrfSecret, __csrf_magic] was found in the following HTML form: [Form 1: \"firstname\" \"lastname\" ].",
            "zap_reference": "http://projects.webappsec.org/Cross-Site-Request-Forgeryhttp://cwe.mitre.org/data/definitions/352.html",
            "zap_cweid": "352",
            "zap_wascid": "9",
            "zap_riskcode": "1",
            "zap_pluginid": "10202",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestParamExample",
                    "method": "GET",
                    "evidence": "<form action=\"RequestParamExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "evidence": "<form action=\"CookieExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colors.html",
                    "method": "GET",
                    "evidence": "<form method=GET action=colrs.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/login.html",
                    "method": "GET",
                    "evidence": "<form method=GET action=cal1.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5\" method=GET>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.html",
                    "method": "GET",
                    "evidence": "<form type=POST action=carts.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/nonblocking/bytecounter.html",
                    "method": "GET",
                    "evidence": "<form method=\"POST\" enctype=\"multipart/form-data\" action=\"bytecounter\" >"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/num/numguess.jsp?guess=ZAP",
                    "method": "GET",
                    "evidence": "<form method=get>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5",
                    "method": "POST",
                    "evidence": "<form action=\"SessionExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "GET",
                    "evidence": "<form action=\"CookieExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=remove",
                    "method": "GET",
                    "evidence": "<form type=POST action=carts.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Submit&color1=ZAP&color2=ZAP",
                    "method": "GET",
                    "evidence": "<form method=POST action=colrs.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestParamExample",
                    "method": "POST",
                    "evidence": "<form action=\"RequestParamExample\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5",
                    "method": "POST",
                    "evidence": "<form action=\"SessionExample\" method=GET>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=foo&datavalue=bar",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample\" method=GET>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/num/numguess.jsp",
                    "method": "GET",
                    "evidence": "<form method=get>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "GET",
                    "evidence": "<form action=\"SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5\" method=POST>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/checkbox/check.html",
                    "method": "GET",
                    "evidence": "<FORM TYPE=POST ACTION=checkresult.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=add",
                    "method": "GET",
                    "evidence": "<form type=POST action=carts.jsp>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/cal1.jsp?action=Submit&email=foo-bar%40example.com&name=ZAP",
                    "method": "GET",
                    "evidence": "<FORM METHOD=POST ACTION=cal1.jsp>"
                }
            ]
        },
        "id": "d17b0554-7bbe-4783-9727-591182493755"
    },
    {
        "name": "Cookie Slack Detector",
        "description": "Repeated GET requests: drop a different cookie each time, followed by normal request with all cookies to stabilize session, compare responses against original baseline GET. This can reveal areas where cookie based authentication/attributes are not actually enforced.",
        "category": "Cookie Slack Detector",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "7",
            "zap_solution": null,
            "zap_otherinfo": "Dropping this cookie appears to have invalidated the session: [JSESSIONID] A follow-on request with all original cookies still had a different response than the original request. ",
            "zap_reference": "http://projects.webappsec.org/Fingerprinting",
            "zap_cweid": "200",
            "zap_wascid": "45",
            "zap_riskcode": "0",
            "zap_pluginid": "90027",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5",
                    "method": "POST"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/async/stockticker",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/forward/forward.jsp",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/j_security_check",
                    "method": "POST"
                }
            ]
        },
        "id": "12f75478-56fb-4c96-ad1e-9c962c6dbbb6"
    },
    {
        "name": "Information Disclosure - Suspicious Comments",
        "description": "The response appears to contain suspicious comments which may help an attacker. Note: Matches made within script blocks or files are against the entire content not only comments.",
        "category": "Information Disclosure - Suspicious Comments",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "5",
            "zap_solution": "Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.",
            "zap_otherinfo": "The following comment/snippet was identified via the pattern: \\bFROM\\b    \"use strict\";    (function() {        document.addEventListener(\"DOMContentLoaded\", function() {            // Remove elements with \"noscript\" class -  is not            // allowed in XHTML            var noscripts = document.getElementsByClassName(\"noscript\");            for (var i = 0; i                 noscripts[i].parentNode.removeChild(noscripts[i]);            }            // Add script for expand content.            var expandElements = document.getElementsByClassName(\"expand\");            for (var ixx = 0; ixx                 (function(el) {                    var expandContent = document.getElementById(el.getAttribute(\"data-content-id\"));                    expandContent.style.display = \"none\";                    var arrow = document.createTextNode(\"◢ \");                    var arrowSpan = document.createElement(\"span\");                    arrowSpan.appendChild(arrow);                    var link = document.createElement(\"a\");                    link.setAttribute(\"href\", \"#!\");                    while (el.firstChild != null) {                        link.appendChild(el.removeChild(el.firstChild));                    }                    el.appendChild(arrowSpan);                    el.appendChild(link);                    var textSpan = document.createElement(\"span\");                    textSpan.setAttribute(\"style\", \"font-weight: normal;\");                    textSpan.appendChild(document.createTextNode(\" (click to expand)\"));                    el.appendChild(textSpan);                    var visible = true;                    var switchExpand = function() {                        visible = !visible;                        expandContent.style.display = visible ? \"block\" : \"none\";                        arrowSpan.style.color = visible ? \"#000\" : \"#888\";                        return false;                    };                    link.onclick = switchExpand;                    switchExpand();                })(expandElements[ixx]);            }            var Console = {};            Console.log = (function() {                var consoleContainer =                    document.getElementById(\"console-container\");                var console = document.createElement(\"div\");                console.setAttribute(\"id\", \"console\");                consoleContainer.appendChild(console);                return function(message) {                    var p = document.createElement('p');                    p.style.wordWrap = \"break-word\";                    p.appendChild(document.createTextNode(message));                    console.appendChild(p);                    while (console.childNodes.length > 25) {                        console.removeChild(console.firstChild);                    }                    console.scrollTop = console.scrollHeight;                }            })();            function Room(drawContainer) {                /* A pausable event forwarder that can be used to pause and                 * resume handling of events (e.g. when we need to wait                 * for a Image's load event before we can process further                 * WebSocket messages).                 * The object's callFunction(func) should be called from an                 * event handler and give the function to handle the event as                 * argument.                 * Call pauseProcessing() to suspend event forwarding and                 * resumeProcessing() to resume it.                 */                function PausableEventForwarder() {                    var pauseProcessing = false;                    // Queue for buffering functions to be called.                    var functionQueue = [];                    this.callFunction = function(func) {                        // If message processing is paused, we push it                        // into the queue - otherwise we process it directly.                        if (pauseProcessing) {                            functionQueue.push(func);                        } else {                            func();                        }                    };                    this.pauseProcessing = function() {                        pauseProcessing = true;                    };                    this.resumeProcessing = function() {                        pauseProcessing = false;                        // Process all queued functions until some handler calls                        // pauseProcessing() again.                        while (functionQueue.length > 0 && !pauseProcessing) {                            var func = functionQueue.pop();                            func();                        }                    };                }                // The WebSocket object.                var socket;                // ID of the timer which sends ping messages.                var pingTimerId;                var isStarted = false;                var playerCount = 0;                // An array of PathIdContainer objects that the server                // did not yet handle.                // They are ordered by id (ascending).                var pathsNotHandled = [];                var nextMsgId = 1;                var canvasDisplay = document.createElement(\"canvas\");                var canvasBackground = document.createElement(\"canvas\");                var canvasServerImage = document.createElement(\"canvas\");                var canvasArray = [canvasDisplay, canvasBackground,                    canvasServerImage];                canvasDisplay.addEventListener(\"mousedown\", function(e) {                    // Prevent default mouse event to prevent browsers from marking text                    // (and Chrome from displaying the \"text\" cursor).                    e.preventDefault();                }, false);                var labelPlayerCount = document.createTextNode(\"0\");                var optionContainer = document.createElement(\"div\");                var canvasDisplayCtx = canvasDisplay.getContext(\"2d\");                var canvasBackgroundCtx = canvasBackground.getContext(\"2d\");                var canvasServerImageCtx = canvasServerImage.getContext(\"2d\");                var canvasMouseMoveHandler;                var canvasMouseDownHandler;                var isActive = false;                var mouseInWindow = false;                var mouseDown = false;                var currentMouseX = 0, currentMouseY = 0;                var currentPreviewPath = null;                var availableColors = [];                var currentColorIndex;                var colorContainers;                var previewTransparency = 0.65;                var availableThicknesses = [2, 3, 6, 10, 16, 28, 50];                var currentThicknessIndex;                var thicknessContainers;                var availableDrawTypes = [                           { name: \"Brush\", id: 1, continuous: true },                           { name: \"Line\", id: 2, continuous: false },                           { name: \"Rectangle\", id: 3, continuous: false },                           { name: \"Ellipse\", id: 4, continuous: false }                ];                var currentDrawTypeIndex;                var drawTypeContainers;                var labelContainer = document.getElementById(\"labelContainer\");                var placeholder = document.createElement(\"div\");                placeholder.appendChild(document.createTextNode(\"Loading... \"));                var progressElem = document.createElement(\"progress\");                placeholder.appendChild(progressElem);                labelContainer.appendChild(placeholder);                function rgb(color) {                       return \"rgba(\" + color[0] + \",\" + color[1] + \",\"                               + color[2] + \",\" + color[3] + \")\";                   }                function PathIdContainer(path, id) {                    this.path = path;                    this.id = id;                }                function Path(type, color, thickness, x1, y1, x2, y2, lastInChain) {                    this.type = type;                    this.color = color;                    this.thickness = thickness;                    this.x1 = x1;                    this.y1 = y1;                    this.x2 = x2;                    this.y2 = y2;                    this.lastInChain = lastInChain;                    function ellipse(ctx, x, y, w, h) {                        /* Drawing a ellipse cannot be done directly in a                         * CanvasRenderingContext2D - we need to use drawArc()                         * in conjunction with scaling the context so that we                         * get the needed proportion.                         */                        ctx.save();                        // Translate and scale the context so that we can draw                        // an arc at (0, 0) with a radius of 1.                        ctx.translate(x + w / 2, y + h / 2);                        ctx.scale(w / 2, h / 2);                        ctx.beginPath();                        ctx.arc(0, 0, 1, 0, Math.PI * 2, false);                        ctx.restore();                    }                    this.draw = function(ctx) {                        ctx.beginPath();                        ctx.lineCap = \"round\";                        ctx.lineWidth = thickness;                        var style = rgb(color);                        ctx.strokeStyle = style;                        if (x1 == x2 && y1 == y2) {                            // Always draw as arc to meet the behavior                            // in Java2D.                            ctx.fillStyle = style;                            ctx.arc(x1, y1, thickness / 2.0, 0,                                    Math.PI * 2.0, false);                            ctx.fill();                        } else {                            if (type == 1 || type == 2) {                                // Draw a line.                                ctx.moveTo(x1, y1);                                ctx.lineTo(x2, y2);                                ctx.stroke();                            } else if (type == 3) {                                // Draw a rectangle.                                if (x1 == x2 || y1 == y2) {                                    // Draw as line                                    ctx.moveTo(x1, y1);                                    ctx.lineTo(x2, y2);                                    ctx.stroke();                                } else {                                    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);                                }                            } else if (type == 4) {                                // Draw a ellipse.                                ellipse(ctx, x1, y1, x2 - x1, y2 - y1);                                ctx.closePath();                                ctx.stroke();                            }                        }                    };                }                function connect() {                    var host = (window.location.protocol == \"https:\"                            ? \"wss://\" : \"ws://\") + window.location.host                            + \"/examples/websocket/drawboard\";                    socket = new WebSocket(host);                    /* Use a pausable event forwarder.                     * This is needed when we load an Image object with data                     * from a previous message, because we must wait until the                     * Image's load event it raised before we can use it (and                     * in the meantime the socket.message event could be                     * raised).                     * Therefore we need this pausable event handler to handle                     * e.g. socket.onmessage and socket.onclose.                     */                    var eventForwarder = new PausableEventForwarder();                    socket.onopen = function () {                        // Socket has opened. Now wait for the server to                        // send us the initial packet.                        Console.log(\"WebSocket connection opened.\");                        // Set up a timer for pong messages.                        pingTimerId = window.setInterval(function() {                            socket.send(\"0\");                        }, 30000);                    };                    socket.onclose = function () {                        eventForwarder.callFunction(function() {                            Console.log(\"WebSocket connection closed.\");                            disableControls();                            // Disable pong timer.                            window.clearInterval(pingTimerId);                        });                    };                    // Handles an incoming Websocket message.                    var handleOnMessage = function(message) {                        // Split joined message and process them                        // invidividually.                        var messages = message.data.split(\";\");                        for (var msgArrIdx = 0; msgArrIdx                                 msgArrIdx++) {                            var msg = messages[msgArrIdx];                            var type = msg.substring(0, 1);                            if (type == \"0\") {                                // Error message.                                var error = msg.substring(1);                                // Log it to the console and show an alert.                                Console.log(\"Error: \" + error);                                alert(error);                            } else {                                if (!isStarted) {                                    if (type == \"2\") {                                        // Initial message. It contains the                                        // number of players.                                        // After this message we will receive                                        // a binary message containing the current                                        // room image as PNG.                                        playerCount = parseInt(msg.substring(1));                                        refreshPlayerCount();                                        // The next message will be a binary                                        // message containing the room images                                        // as PNG. Therefore we temporarily swap                                        // the message handler.                                        var originalHandler = handleOnMessage;                                        handleOnMessage = function(message) {                                            // First, we restore the original handler.                                            handleOnMessage = originalHandler;                                            // Read the image.                                            var blob = message.data;                                            // Create new blob with correct MIME type.                                            blob = new Blob([blob], {type : \"image/png\"});                                            var url = URL.createObjectURL(blob);                                            var img = new Image();                                            // We must wait until the onload event is                                            // raised until we can draw the image onto                                            // the canvas.                                            // Therefore we need to pause the event                                            // forwarder until the image is loaded.                                            eventForwarder.pauseProcessing();                                            img.onload = function() {                                                // Release the object URL.                                                URL.revokeObjectURL(url);                                                // Set the canvases to the correct size.                                                for (var i = 0; i                                                     canvasArray[i].width = img.width;                                                    canvasArray[i].height = img.height;                                                }                                                // Now draw the image on the last canvas.                                                canvasServerImageCtx.clearRect(0, 0,                                                        canvasServerImage.width,                                                        canvasServerImage.height);                                                canvasServerImageCtx.drawImage(img, 0, 0);                                                // Draw it on the background canvas.                                                canvasBackgroundCtx.drawImage(canvasServerImage,                                                        0, 0);                                                isStarted = true;                                                startControls();                                                // Refresh the display canvas.                                                refreshDisplayCanvas();                                                // Finally, resume the event forwarder.                                                eventForwarder.resumeProcessing();                                            };                                            img.src = url;                                        };                                    }                                } else {                                    if (type == \"3\") {                                        // The number of players in this room changed.                                        var playerAdded = msg.substring(1) == \"+\";                                        playerCount += playerAdded ? 1 : -1;                                        refreshPlayerCount();                                        Console.log(\"Player \" + (playerAdded                                                ? \"joined.\" : \"left.\"));                                    } else if (type == \"1\") {                                        // We received a new DrawMessage.                                        var maxLastHandledId = -1;                                        var drawMessages = msg.substring(1).split(\"|\");                                        for (var i = 0; i                                             var elements = drawMessages[i].split(\",\");                                            var lastHandledId = parseInt(elements[0]);                                               maxLastHandledId = Math.max(maxLastHandledId,                                                       lastHandledId);                                            var path = new Path(                                                    parseInt(elements[1]),                                                    [parseInt(elements[2]),                                                    parseInt(elements[3]),                                                    parseInt(elements[4]),                                                    parseInt(elements[5]) / 255.0],                                                    parseFloat(elements[6]),                                                    parseFloat(elements[7]),                                                    parseFloat(elements[8]),                                                    parseFloat(elements[9]),                                                    parseFloat(elements[10]),                                                    elements[11] != \"0\");                                            // Draw the path onto the last canvas.                                            path.draw(canvasServerImageCtx);                                        }                                        // Draw the last canvas onto the background one.                                        canvasBackgroundCtx.drawImage(canvasServerImage,                                                0, 0);                                        // Now go through the pathsNotHandled array and                                        // remove the paths that were already handled by                                        // the server.                                        while (pathsNotHandled.length > 0                                                && pathsNotHandled[0].id                                             pathsNotHandled.shift();                                        // Now me must draw the remaining paths onto                                        // the background canvas.                                        for (var i = 0; i                                             pathsNotHandled[i].path.draw(canvasBackgroundCtx);                                        }                                        refreshDisplayCanvas();                                    }                                }                            }                        }                    };                    socket.onmessage = function(message) {                        eventForwarder.callFunction(function() {                            handleOnMessage(message);                        });                    };                }                function refreshPlayerCount() {                    labelPlayerCount.nodeValue = String(playerCount);                }                function refreshDisplayCanvas() {                    if (!isActive) { // Don't draw a curser when not active.                        return;                    }                    canvasDisplayCtx.drawImage(canvasBackground, 0, 0);                    if (currentPreviewPath != null) {                        // Draw the preview path.                        currentPreviewPath.draw(canvasDisplayCtx);                    } else if (mouseInWindow && !mouseDown) {                        canvasDisplayCtx.beginPath();                        var color = availableColors[currentColorIndex].slice(0);                        color[3] = previewTransparency;                        canvasDisplayCtx.fillStyle = rgb(color);                        canvasDisplayCtx.arc(currentMouseX, currentMouseY,                                availableThicknesses[currentThicknessIndex] / 2,                                0, Math.PI * 2.0, true);                        canvasDisplayCtx.fill();                    }                }                function startControls() {                    isActive = true;                    labelContainer.removeChild(placeholder);                    placeholder = undefined;                    labelContainer.appendChild(                            document.createTextNode(\"Number of Players: \"));                    labelContainer.appendChild(labelPlayerCount);                    drawContainer.style.display = \"block\";                    drawContainer.appendChild(canvasDisplay);                    drawContainer.appendChild(optionContainer);                    canvasMouseDownHandler = function(e) {                        if (e.button == 0) {                            currentMouseX = e.pageX - canvasDisplay.offsetLeft;                            currentMouseY = e.pageY - canvasDisplay.offsetTop;                            mouseDown = true;                            canvasMouseMoveHandler(e);                        } else if (mouseDown) {                            // Cancel drawing.                            mouseDown = false;                            currentPreviewPath = null;                            currentMouseX = e.pageX - canvasDisplay.offsetLeft;                            currentMouseY = e.pageY - canvasDisplay.offsetTop;                            refreshDisplayCanvas();                        }                    };                    canvasDisplay.addEventListener(\"mousedown\", canvasMouseDownHandler, false);                    canvasMouseMoveHandler = function(e) {                        var mouseX = e.pageX - canvasDisplay.offsetLeft;                        var mouseY = e.pageY - canvasDisplay.offsetTop;                        if (mouseDown) {                            var drawType = availableDrawTypes[currentDrawTypeIndex];                            if (drawType.continuous) {                                var path = new Path(drawType.id,                                        availableColors[currentColorIndex],                                        availableThicknesses[currentThicknessIndex],                                        currentMouseX, currentMouseY, mouseX,                                        mouseY, false);                                // Draw it on the background canvas.                                path.draw(canvasBackgroundCtx);                                // Send it to the sever.                                pushPath(path);                                // Refresh old coordinates                                currentMouseX = mouseX;                                currentMouseY = mouseY;                            } else {                                // Create a new preview path.                                var color = availableColors[currentColorIndex].slice(0);                                color[3] = previewTransparency;                                currentPreviewPath = new Path(drawType.id,                                        color,                                        availableThicknesses[currentThicknessIndex],                                        currentMouseX, currentMouseY, mouseX,                                        mouseY, false);                            }                            refreshDisplayCanvas();                        } else {                            currentMouseX = mouseX;                            currentMouseY = mouseY;                            if (mouseInWindow) {                                refreshDisplayCanvas();                            }                        }                    };                    document.addEventListener(\"mousemove\", canvasMouseMoveHandler, false);                    document.addEventListener(\"mouseup\", function(e) {                        if (e.button == 0) {                            if (mouseDown) {                                mouseDown = false;                                currentPreviewPath = null;                                var mouseX = e.pageX - canvasDisplay.offsetLeft;                                var mouseY = e.pageY - canvasDisplay.offsetTop;                                var drawType = availableDrawTypes[currentDrawTypeIndex];                                var path = new Path(drawType.id, availableColors[currentColorIndex],                                        availableThicknesses[currentThicknessIndex],                                        currentMouseX, currentMouseY, mouseX,                                        mouseY, true);                                // Draw it on the background canvas.                                path.draw(canvasBackgroundCtx);                                // Send it to the sever.                                pushPath(path);                                // Refresh old coordinates                                currentMouseX = mouseX;                                currentMouseY = mouseY;                                refreshDisplayCanvas();                            }                        }                    }, false);                    canvasDisplay.addEventListener(\"mouseout\", function(e) {                        mouseInWindow = false;                        refreshDisplayCanvas();                    }, false);                    canvasDisplay.addEventListener(\"mousemove\", function(e) {                        if (!mouseInWindow) {                            mouseInWindow = true;                            refreshDisplayCanvas();                        }                    }, false);                    // Create color and thickness controls.                    var colorContainersBox = document.createElement(\"div\");                    colorContainersBox.setAttribute(\"style\",                            \"margin: 4px; border: 1px solid #bbb; border-radius: 3px;\");                    optionContainer.appendChild(colorContainersBox);                    colorContainers = new Array(3 * 3 * 3);                    for (var i = 0; i                         var colorContainer = colorContainers[i] =                            document.createElement(\"div\");                        var color = availableColors[i] =                            [                                Math.floor((i % 3) * 255 / 2),                                Math.floor((Math.floor(i / 3) % 3) * 255 / 2),                                Math.floor((Math.floor(i / (3 * 3)) % 3) * 255 / 2),                                1.0                            ];                        colorContainer.setAttribute(\"style\",                                \"margin: 3px; width: 18px; height: 18px; \"                                + \"float: left; background-color: \" + rgb(color));                        colorContainer.style.border = '2px solid #000';                        colorContainer.addEventListener(\"mousedown\", (function(ix) {                            return function() {                                setColor(ix);                            };                        })(i), false);                        colorContainersBox.appendChild(colorContainer);                    }                    var divClearLeft = document.createElement(\"div\");                    divClearLeft.setAttribute(\"style\", \"clear: left;\");                    colorContainersBox.appendChild(divClearLeft);                    var drawTypeContainersBox = document.createElement(\"div\");                    drawTypeContainersBox.setAttribute(\"style\",                           \"float: right; margin-right: 3px; margin-top: 1px;\");                    optionContainer.appendChild(drawTypeContainersBox);                    drawTypeContainers = new Array(availableDrawTypes.length);                    for (var i = 0; i                         var drawTypeContainer = drawTypeContainers[i] =                            document.createElement(\"div\");                        drawTypeContainer.setAttribute(\"style\",                                \"text-align: center; margin: 3px; padding: 0 3px;\"                                + \"height: 18px; float: left;\");                        drawTypeContainer.style.border = \"2px solid #000\";                        drawTypeContainer.appendChild(document.createTextNode(                                String(availableDrawTypes[i].name)));                        drawTypeContainer.addEventListener(\"mousedown\", (function(ix) {                            return function() {                                setDrawType(ix);                            };                        })(i), false);                        drawTypeContainersBox.appendChild(drawTypeContainer);                    }                    var thicknessContainersBox = document.createElement(\"div\");                    thicknessContainersBox.setAttribute(\"style\",                            \"margin: 3px; border: 1px solid #bbb; border-radius: 3px;\");                    optionContainer.appendChild(thicknessContainersBox);                    thicknessContainers = new Array(availableThicknesses.length);                    for (var i = 0; i                         var thicknessContainer = thicknessContainers[i] =                            document.createElement(\"div\");                        thicknessContainer.setAttribute(\"style\",                                \"text-align: center; margin: 3px; width: 18px; \"                                + \"height: 18px; float: left;\");                        thicknessContainer.style.border = \"2px solid #000\";                        thicknessContainer.appendChild(document.createTextNode(                                String(availableThicknesses[i])));                        thicknessContainer.addEventListener(\"mousedown\", (function(ix) {                            return function() {                                setThickness(ix);                            };                        })(i), false);                        thicknessContainersBox.appendChild(thicknessContainer);                    }                    divClearLeft = document.createElement(\"div\");                    divClearLeft.setAttribute(\"style\", \"clear: left;\");                    thicknessContainersBox.appendChild(divClearLeft);                    setColor(0);                    setThickness(0);                    setDrawType(0);                }                function disableControls() {                    document.removeEventListener(\"mousedown\", canvasMouseDownHandler);                    document.removeEventListener(\"mousemove\", canvasMouseMoveHandler);                    mouseInWindow = false;                    refreshDisplayCanvas();                    isActive = false;                }                function pushPath(path) {                    // Push it into the pathsNotHandled array.                    var container = new PathIdContainer(path, nextMsgId++);                    pathsNotHandled.push(container);                    // Send the path to the server.                    var message = container.id + \"|\" + path.type + \",\"                            + path.color[0] + \",\" + path.color[1] + \",\"                            + path.color[2] + \",\"                            + Math.round(path.color[3] * 255.0) + \",\"                            + path.thickness + \",\" + path.x1 + \",\"                            + path.y1 + \",\" + path.x2 + \",\" + path.y2 + \",\"                            + (path.lastInChain ? \"1\" : \"0\");                    socket.send(\"1\" + message);                }                function setThickness(thicknessIndex) {                    if (typeof currentThicknessIndex !== \"undefined\")                        thicknessContainers[currentThicknessIndex]                            .style.borderColor = \"#000\";                    currentThicknessIndex = thicknessIndex;                    thicknessContainers[currentThicknessIndex]                        .style.borderColor = \"#d08\";                }                function setColor(colorIndex) {                    if (typeof currentColorIndex !== \"undefined\")                        colorContainers[currentColorIndex]                            .style.borderColor = \"#000\";                    currentColorIndex = colorIndex;                    colorContainers[currentColorIndex]                        .style.borderColor = \"#d08\";                }                function setDrawType(drawTypeIndex) {                    if (typeof currentDrawTypeIndex !== \"undefined\")                        drawTypeContainers[currentDrawTypeIndex]                            .style.borderColor = \"#000\";                    currentDrawTypeIndex = drawTypeIndex;                    drawTypeContainers[currentDrawTypeIndex]                        .style.borderColor = \"#d08\";                }                connect();            }            // Initialize the room            var room = new Room(document.getElementById(\"drawContainer\"));        }, false);    })();    ]]>",
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10027",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/drawboard.xhtml",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-objects.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/echo.xhtml",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-opers.html",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/funcspecs/fs-admin-apps.html",
                    "method": "GET"
                }
            ]
        },
        "id": "29bd9fa3-9326-475d-885d-9858a3c437a5"
    },
    {
        "name": "User Controllable HTML Element Attribute (Potential XSS)",
        "description": "This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.",
        "category": "User Controllable HTML Element Attribute (Potential XSS)",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "7",
            "zap_solution": "Validate all input and sanitize output it before writing to any HTML attributes.",
            "zap_otherinfo": "User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.jsp?foo=barappears to include user input in: a(n) [input] tag [value] attribute The user input found was:foo=barThe user-controlled value was:bar",
            "zap_reference": "http://websecuritytool.codeplex.com/wikipage?title=Checks#user-controlled-html-attribute",
            "zap_cweid": "20",
            "zap_wascid": "20",
            "zap_riskcode": "0",
            "zap_pluginid": "10031",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/implicit-objects.jsp?foo=bar",
                    "method": "GET",
                    "param": "foo"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=remove",
                    "method": "GET",
                    "param": "submit"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/jsp2/el/functions.jsp?foo=JSP+2.0",
                    "method": "GET",
                    "param": "foo"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Submit&color1=ZAP&color2=ZAP",
                    "method": "GET",
                    "param": "action"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Submit&color1=ZAP&color2=ZAP",
                    "method": "GET",
                    "param": "action"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/colors/colrs.jsp?action=Hint&color1=ZAP&color2=ZAP",
                    "method": "GET",
                    "param": "action"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/sessions/carts.jsp?item=X-files+movie&submit=add",
                    "method": "GET",
                    "param": "submit"
                }
            ]
        },
        "id": "2d2dee48-5653-4f93-8598-5a76875353d8"
    },
    {
        "name": "In Page Banner Information Leak",
        "description": "The server returned a version banner string in the response content. Such information leaks may allow attackers to further target specific issues impacting the product and version in use.",
        "category": "In Page Banner Information Leak",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "14",
            "zap_solution": "Configure the server to prevent such information leaks. For example:Under Tomcat this is done via the \"server\" directive and implementation of custom error pages.Under Apache this is done via the \"ServerSignature\" and \"ServerTokens\" directives.",
            "zap_otherinfo": "There is a chance that the highlight in the finding is on a value in the headers, versus the actual matched string in the response body.",
            "zap_reference": "https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/08-Testing_for_Error_Handling/",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10009",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/juli/package-summary.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/Context.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/manager/JMXProxyServlet.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/tribes/package-summary.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/images/read.gif",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/Host.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/Engine.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/Service.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/robots.txt",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/core/StandardHost.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/core/StandardContext.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/sitemap.xml",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/api/org/apache/catalina/Server.html",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/cluster-manager.html%23The_%3CManager%3E",
                    "method": "GET",
                    "evidence": "Tomcat/8.0.37"
                }
            ]
        },
        "id": "3cb0b5d1-2d36-41a9-bab9-aedf3bdc0afe"
    },
    {
        "name": "Application Error Disclosure",
        "description": "This page contains an error/warning message that may disclose sensitive information like the location of the file that produced the unhandled exception. This information can be used to launch further attacks against the web application. The alert could be a false positive if the error message is found inside a documentation page.",
        "category": "Application Error Disclosure",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "5",
            "zap_solution": "Review the source code of this page. Implement custom error pages. Consider implementing a mechanism to provide a unique error reference/identifier to the client (browser) while logging the details on the server side and not exposing them to the user.",
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "2",
            "zap_pluginid": "90022",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/listeners.html",
                    "method": "GET",
                    "evidence": "JDBC Driver"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jndi-resources-howto.html",
                    "method": "GET",
                    "evidence": "JDBC Driver"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/manager-howto.html",
                    "method": "GET",
                    "evidence": "java.lang.NumberFormatException: For input string:"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/jndi-datasource-examples-howto.html",
                    "method": "GET",
                    "evidence": "JDBC Driver"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/valve.html",
                    "method": "GET",
                    "evidence": "Error Report"
                }
            ]
        },
        "id": "a7329ae8-4b50-40ad-a220-c494320b54dd"
    },
    {
        "name": ".env Information Leak",
        "description": "One or more .env files seems to have been located on the server. These files often expose infrastructure or administrative account credentials, API or APP keys, or other sensitive configuration information. ",
        "category": ".env Information Leak",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "1",
            "zap_solution": "Ensure the .env file is not accessible.",
            "zap_otherinfo": null,
            "zap_reference": "https://www.google.com/search?q=db_password+filetype%3Aenvhttps://mobile.twitter.com/svblxyz/status/1045013939904532482",
            "zap_cweid": "215",
            "zap_wascid": "13",
            "zap_riskcode": "2",
            "zap_pluginid": "40034",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/.env",
                    "method": "GET",
                    "evidence": "HTTP/1.1 200 OK"
                }
            ]
        },
        "id": "da005874-ed6b-48a2-adb2-5a8f75cce438"
    },
    {
        "name": "Content-Type Header Missing",
        "description": "The Content-Type header was either missing or empty.",
        "category": "Content-Type Header Missing",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "2",
            "zap_solution": "Ensure each page is setting the specific and appropriate content-type value for the content being delivered.",
            "zap_otherinfo": null,
            "zap_reference": "http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspx",
            "zap_cweid": "345",
            "zap_wascid": "12",
            "zap_riskcode": "0",
            "zap_pluginid": "10019",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/async/async2",
                    "method": "GET"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/appdev/sample/sample.war",
                    "method": "GET"
                }
            ]
        },
        "id": "9faf342f-46b2-4b0d-8ef7-b1b1c00aaba7"
    },
    {
        "name": "GET for POST",
        "description": "A request that was originally observed as a POST was also accepted as a GET. This issue does not represent a security weakness unto itself, however, it may facilitate simplification of other attacks. For example if the original POST is subject to Cross-Site Scripting (XSS), then this finding may indicate that a simplified (GET based) XSS may also be possible.",
        "category": "GET for POST",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "2",
            "zap_solution": "Ensure that only POST is accepted where POST is expected.",
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "16",
            "zap_wascid": "20",
            "zap_riskcode": "0",
            "zap_pluginid": "10058",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestParamExample",
                    "method": "GET",
                    "evidence": "GET http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestParamExample?firstname=ZAP&lastname=ZAP HTTP/1.1"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/j_security_check",
                    "method": "GET",
                    "evidence": "GET http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/j_security_check?j_password=ZAP&j_username=ZAP HTTP/1.1"
                }
            ]
        },
        "id": "b4ad4d00-cefd-4597-95a9-86602cfca787"
    },
    {
        "name": "Modern Web Application",
        "description": "The application appears to be a modern web application. If you need to explore it automatically then the Ajax Spider may well be more effective than the standard one.",
        "category": "Modern Web Application",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "4",
            "zap_solution": "This is an informational alert and so no changes are required.",
            "zap_otherinfo": "No links have been found while there are scripts, which is an indication that this is a modern web application.",
            "zap_reference": null,
            "zap_cweid": null,
            "zap_wascid": null,
            "zap_riskcode": "0",
            "zap_pluginid": "10109",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/echo.xhtml",
                    "method": "GET",
                    "evidence": "<script type=\"application/javascript\"><![CDATA[\n        \"use strict\";\n\n        var ws = null;\n\n        function setConnected(connected) {\n            document.getElementById('connect').disabled = connected;\n            document.getElementById('disconnect').disabled = !connected;\n            document.getElementById('echo').disabled = !connected;\n        }\n\n        function connect() {\n            var target = document.getElementById('target').value;\n            if (target == '') {\n                alert('Please select server side connection implementation.');\n                return;\n            }\n            if ('WebSocket' in window) {\n                ws = new WebSocket(target);\n            } else if ('MozWebSocket' in window) {\n                ws = new MozWebSocket(target);\n            } else {\n                alert('WebSocket is not supported by this browser.');\n                return;\n            }\n            ws.onopen = function () {\n                setConnected(true);\n                log('Info: WebSocket connection opened.');\n            };\n            ws.onmessage = function (event) {\n                log('Received: ' + event.data);\n            };\n            ws.onclose = function (event) {\n                setConnected(false);\n                log('Info: WebSocket connection closed, Code: ' + event.code + (event.reason == \"\" ? \"\" : \", Reason: \" + event.reason));\n            };\n        }\n\n        function disconnect() {\n            if (ws != null) {\n                ws.close();\n                ws = null;\n            }\n            setConnected(false);\n        }\n\n        function echo() {\n            if (ws != null) {\n                var message = document.getElementById('message').value;\n                log('Sent: ' + message);\n                ws.send(message);\n            } else {\n                alert('WebSocket connection not established, please connect.');\n            }\n        }\n\n        function updateTarget(target) {\n            if (window.location.protocol == 'http:') {\n                document.getElementById('target').value = 'ws://' + window.location.host + target;\n            } else {\n                document.getElementById('target').value = 'wss://' + window.location.host + target;\n            }\n        }\n\n        function log(message) {\n            var console = document.getElementById('console');\n            var p = document.createElement('p');\n            p.style.wordWrap = 'break-word';\n            p.appendChild(document.createTextNode(message));\n            console.appendChild(p);\n            while (console.childNodes.length > 25) {\n                console.removeChild(console.firstChild);\n            }\n            console.scrollTop = console.scrollHeight;\n        }\n\n\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            // Remove elements with \"noscript\" class - <noscript> is not allowed in XHTML\n            var noscripts = document.getElementsByClassName(\"noscript\");\n            for (var i = 0; i < noscripts.length; i++) {\n                noscripts[i].parentNode.removeChild(noscripts[i]);\n            }\n        }, false);\n    ]]></script>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/drawboard.xhtml",
                    "method": "GET",
                    "evidence": "<script type=\"application/javascript\"><![CDATA[\n    \"use strict\";\n\n    (function() {\n\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            // Remove elements with \"noscript\" class - <noscript> is not\n            // allowed in XHTML\n            var noscripts = document.getElementsByClassName(\"noscript\");\n            for (var i = 0; i < noscripts.length; i++) {\n                noscripts[i].parentNode.removeChild(noscripts[i]);\n            }\n\n            // Add script for expand content.\n            var expandElements = document.getElementsByClassName(\"expand\");\n            for (var ixx = 0; ixx < expandElements.length; ixx++) {\n                (function(el) {\n                    var expandContent = document.getElementById(el.getAttribute(\"data-content-id\"));\n                    expandContent.style.display = \"none\";\n                    var arrow = document.createTextNode(\"◢ \");\n                    var arrowSpan = document.createElement(\"span\");\n                    arrowSpan.appendChild(arrow);\n\n                    var link = document.createElement(\"a\");\n                    link.setAttribute(\"href\", \"#!\");\n                    while (el.firstChild != null) {\n                        link.appendChild(el.removeChild(el.firstChild));\n                    }\n                    el.appendChild(arrowSpan);\n                    el.appendChild(link);\n\n                    var textSpan = document.createElement(\"span\");\n                    textSpan.setAttribute(\"style\", \"font-weight: normal;\");\n                    textSpan.appendChild(document.createTextNode(\" (click to expand)\"));\n                    el.appendChild(textSpan);\n\n\n                    var visible = true;\n\n                    var switchExpand = function() {\n                        visible = !visible;\n                        expandContent.style.display = visible ? \"block\" : \"none\";\n                        arrowSpan.style.color = visible ? \"#000\" : \"#888\";\n                        return false;\n                    };\n\n                    link.onclick = switchExpand;\n                    switchExpand();\n\n                })(expandElements[ixx]);\n            }\n\n\n            var Console = {};\n\n            Console.log = (function() {\n                var consoleContainer =\n                    document.getElementById(\"console-container\");\n                var console = document.createElement(\"div\");\n                console.setAttribute(\"id\", \"console\");\n                consoleContainer.appendChild(console);\n\n                return function(message) {\n                    var p = document.createElement('p');\n                    p.style.wordWrap = \"break-word\";\n                    p.appendChild(document.createTextNode(message));\n                    console.appendChild(p);\n                    while (console.childNodes.length > 25) {\n                        console.removeChild(console.firstChild);\n                    }\n                    console.scrollTop = console.scrollHeight;\n                }\n            })();\n\n\n            function Room(drawContainer) {\n\n                /* A pausable event forwarder that can be used to pause and\n                 * resume handling of events (e.g. when we need to wait\n                 * for a Image's load event before we can process further\n                 * WebSocket messages).\n                 * The object's callFunction(func) should be called from an\n                 * event handler and give the function to handle the event as\n                 * argument.\n                 * Call pauseProcessing() to suspend event forwarding and\n                 * resumeProcessing() to resume it.\n                 */\n                function PausableEventForwarder() {\n\n                    var pauseProcessing = false;\n                    // Queue for buffering functions to be called.\n                    var functionQueue = [];\n\n                    this.callFunction = function(func) {\n                        // If message processing is paused, we push it\n                        // into the queue - otherwise we process it directly.\n                        if (pauseProcessing) {\n                            functionQueue.push(func);\n                        } else {\n                            func();\n                        }\n                    };\n\n                    this.pauseProcessing = function() {\n                        pauseProcessing = true;\n                    };\n\n                    this.resumeProcessing = function() {\n                        pauseProcessing = false;\n\n                        // Process all queued functions until some handler calls\n                        // pauseProcessing() again.\n                        while (functionQueue.length > 0 && !pauseProcessing) {\n                            var func = functionQueue.pop();\n                            func();\n                        }\n                    };\n                }\n\n                // The WebSocket object.\n                var socket;\n                // ID of the timer which sends ping messages.\n                var pingTimerId;\n\n                var isStarted = false;\n                var playerCount = 0;\n\n                // An array of PathIdContainer objects that the server\n                // did not yet handle.\n                // They are ordered by id (ascending).\n                var pathsNotHandled = [];\n\n                var nextMsgId = 1;\n\n                var canvasDisplay = document.createElement(\"canvas\");\n                var canvasBackground = document.createElement(\"canvas\");\n                var canvasServerImage = document.createElement(\"canvas\");\n                var canvasArray = [canvasDisplay, canvasBackground,\n                    canvasServerImage];\n                canvasDisplay.addEventListener(\"mousedown\", function(e) {\n                    // Prevent default mouse event to prevent browsers from marking text\n                    // (and Chrome from displaying the \"text\" cursor).\n                    e.preventDefault();\n                }, false);\n\n                var labelPlayerCount = document.createTextNode(\"0\");\n                var optionContainer = document.createElement(\"div\");\n\n\n                var canvasDisplayCtx = canvasDisplay.getContext(\"2d\");\n                var canvasBackgroundCtx = canvasBackground.getContext(\"2d\");\n                var canvasServerImageCtx = canvasServerImage.getContext(\"2d\");\n                var canvasMouseMoveHandler;\n                var canvasMouseDownHandler;\n\n                var isActive = false;\n                var mouseInWindow = false;\n                var mouseDown = false;\n                var currentMouseX = 0, currentMouseY = 0;\n                var currentPreviewPath = null;\n\n                var availableColors = [];\n                var currentColorIndex;\n                var colorContainers;\n                var previewTransparency = 0.65;\n\n                var availableThicknesses = [2, 3, 6, 10, 16, 28, 50];\n                var currentThicknessIndex;\n                var thicknessContainers;\n\n                var availableDrawTypes = [\n                           { name: \"Brush\", id: 1, continuous: true },\n                           { name: \"Line\", id: 2, continuous: false },\n                           { name: \"Rectangle\", id: 3, continuous: false },\n                           { name: \"Ellipse\", id: 4, continuous: false }\n                ];\n                var currentDrawTypeIndex;\n                var drawTypeContainers;\n\n\n                var labelContainer = document.getElementById(\"labelContainer\");\n                var placeholder = document.createElement(\"div\");\n                placeholder.appendChild(document.createTextNode(\"Loading... \"));\n                var progressElem = document.createElement(\"progress\");\n                placeholder.appendChild(progressElem);\n\n                labelContainer.appendChild(placeholder);\n\n                function rgb(color) {\n                       return \"rgba(\" + color[0] + \",\" + color[1] + \",\"\n                               + color[2] + \",\" + color[3] + \")\";\n                   }\n\n                function PathIdContainer(path, id) {\n                    this.path = path;\n                    this.id = id;\n                }\n\n                function Path(type, color, thickness, x1, y1, x2, y2, lastInChain) {\n                    this.type = type;\n                    this.color = color;\n                    this.thickness = thickness;\n                    this.x1 = x1;\n                    this.y1 = y1;\n                    this.x2 = x2;\n                    this.y2 = y2;\n                    this.lastInChain = lastInChain;\n\n                    function ellipse(ctx, x, y, w, h) {\n                        /* Drawing a ellipse cannot be done directly in a\n                         * CanvasRenderingContext2D - we need to use drawArc()\n                         * in conjunction with scaling the context so that we\n                         * get the needed proportion.\n                         */\n                        ctx.save();\n\n                        // Translate and scale the context so that we can draw\n                        // an arc at (0, 0) with a radius of 1.\n                        ctx.translate(x + w / 2, y + h / 2);\n                        ctx.scale(w / 2, h / 2);\n\n                        ctx.beginPath();\n                        ctx.arc(0, 0, 1, 0, Math.PI * 2, false);\n\n                        ctx.restore();\n                    }\n\n                    this.draw = function(ctx) {\n                        ctx.beginPath();\n                        ctx.lineCap = \"round\";\n                        ctx.lineWidth = thickness;\n                        var style = rgb(color);\n                        ctx.strokeStyle = style;\n\n                        if (x1 == x2 && y1 == y2) {\n                            // Always draw as arc to meet the behavior\n                            // in Java2D.\n                            ctx.fillStyle = style;\n                            ctx.arc(x1, y1, thickness / 2.0, 0,\n                                    Math.PI * 2.0, false);\n                            ctx.fill();\n                        } else {\n                            if (type == 1 || type == 2) {\n                                // Draw a line.\n                                ctx.moveTo(x1, y1);\n                                ctx.lineTo(x2, y2);\n                                ctx.stroke();\n                            } else if (type == 3) {\n                                // Draw a rectangle.\n                                if (x1 == x2 || y1 == y2) {\n                                    // Draw as line\n                                    ctx.moveTo(x1, y1);\n                                    ctx.lineTo(x2, y2);\n                                    ctx.stroke();\n                                } else {\n                                    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);\n                                }\n                            } else if (type == 4) {\n                                // Draw a ellipse.\n                                ellipse(ctx, x1, y1, x2 - x1, y2 - y1);\n                                ctx.closePath();\n                                ctx.stroke();\n                            }\n                        }\n                    };\n                }\n\n\n                function connect() {\n                    var host = (window.location.protocol == \"https:\"\n                            ? \"wss://\" : \"ws://\") + window.location.host\n                            + \"/examples/websocket/drawboard\";\n                    socket = new WebSocket(host);\n\n                    /* Use a pausable event forwarder.\n                     * This is needed when we load an Image object with data\n                     * from a previous message, because we must wait until the\n                     * Image's load event it raised before we can use it (and\n                     * in the meantime the socket.message event could be\n                     * raised).\n                     * Therefore we need this pausable event handler to handle\n                     * e.g. socket.onmessage and socket.onclose.\n                     */\n                    var eventForwarder = new PausableEventForwarder();\n\n                    socket.onopen = function () {\n                        // Socket has opened. Now wait for the server to\n                        // send us the initial packet.\n                        Console.log(\"WebSocket connection opened.\");\n\n                        // Set up a timer for pong messages.\n                        pingTimerId = window.setInterval(function() {\n                            socket.send(\"0\");\n                        }, 30000);\n                    };\n\n                    socket.onclose = function () {\n                        eventForwarder.callFunction(function() {\n                            Console.log(\"WebSocket connection closed.\");\n                            disableControls();\n\n                            // Disable pong timer.\n                            window.clearInterval(pingTimerId);\n                        });\n                    };\n\n                    // Handles an incoming Websocket message.\n                    var handleOnMessage = function(message) {\n\n                        // Split joined message and process them\n                        // invidividually.\n                        var messages = message.data.split(\";\");\n                        for (var msgArrIdx = 0; msgArrIdx < messages.length;\n                                msgArrIdx++) {\n                            var msg = messages[msgArrIdx];\n                            var type = msg.substring(0, 1);\n\n                            if (type == \"0\") {\n                                // Error message.\n                                var error = msg.substring(1);\n                                // Log it to the console and show an alert.\n                                Console.log(\"Error: \" + error);\n                                alert(error);\n\n                            } else {\n                                if (!isStarted) {\n                                    if (type == \"2\") {\n                                        // Initial message. It contains the\n                                        // number of players.\n                                        // After this message we will receive\n                                        // a binary message containing the current\n                                        // room image as PNG.\n                                        playerCount = parseInt(msg.substring(1));\n\n                                        refreshPlayerCount();\n\n                                        // The next message will be a binary\n                                        // message containing the room images\n                                        // as PNG. Therefore we temporarily swap\n                                        // the message handler.\n                                        var originalHandler = handleOnMessage;\n                                        handleOnMessage = function(message) {\n                                            // First, we restore the original handler.\n                                            handleOnMessage = originalHandler;\n\n                                            // Read the image.\n                                            var blob = message.data;\n                                            // Create new blob with correct MIME type.\n                                            blob = new Blob([blob], {type : \"image/png\"});\n\n                                            var url = URL.createObjectURL(blob);\n\n                                            var img = new Image();\n\n                                            // We must wait until the onload event is\n                                            // raised until we can draw the image onto\n                                            // the canvas.\n                                            // Therefore we need to pause the event\n                                            // forwarder until the image is loaded.\n                                            eventForwarder.pauseProcessing();\n\n                                            img.onload = function() {\n\n                                                // Release the object URL.\n                                                URL.revokeObjectURL(url);\n\n                                                // Set the canvases to the correct size.\n                                                for (var i = 0; i < canvasArray.length; i++) {\n                                                    canvasArray[i].width = img.width;\n                                                    canvasArray[i].height = img.height;\n                                                }\n\n                                                // Now draw the image on the last canvas.\n                                                canvasServerImageCtx.clearRect(0, 0,\n                                                        canvasServerImage.width,\n                                                        canvasServerImage.height);\n                                                canvasServerImageCtx.drawImage(img, 0, 0);\n\n                                                // Draw it on the background canvas.\n                                                canvasBackgroundCtx.drawImage(canvasServerImage,\n                                                        0, 0);\n\n                                                isStarted = true;\n                                                startControls();\n\n                                                // Refresh the display canvas.\n                                                refreshDisplayCanvas();\n\n\n                                                // Finally, resume the event forwarder.\n                                                eventForwarder.resumeProcessing();\n                                            };\n\n                                            img.src = url;\n                                        };\n                                    }\n                                } else {\n                                    if (type == \"3\") {\n                                        // The number of players in this room changed.\n                                        var playerAdded = msg.substring(1) == \"+\";\n                                        playerCount += playerAdded ? 1 : -1;\n                                        refreshPlayerCount();\n\n                                        Console.log(\"Player \" + (playerAdded\n                                                ? \"joined.\" : \"left.\"));\n\n                                    } else if (type == \"1\") {\n                                        // We received a new DrawMessage.\n                                        var maxLastHandledId = -1;\n                                        var drawMessages = msg.substring(1).split(\"|\");\n                                        for (var i = 0; i < drawMessages.length; i++) {\n                                            var elements = drawMessages[i].split(\",\");\n                                            var lastHandledId = parseInt(elements[0]);\n                                               maxLastHandledId = Math.max(maxLastHandledId,\n                                                       lastHandledId);\n\n                                            var path = new Path(\n                                                    parseInt(elements[1]),\n                                                    [parseInt(elements[2]),\n                                                    parseInt(elements[3]),\n                                                    parseInt(elements[4]),\n                                                    parseInt(elements[5]) / 255.0],\n                                                    parseFloat(elements[6]),\n                                                    parseFloat(elements[7]),\n                                                    parseFloat(elements[8]),\n                                                    parseFloat(elements[9]),\n                                                    parseFloat(elements[10]),\n                                                    elements[11] != \"0\");\n\n                                            // Draw the path onto the last canvas.\n                                            path.draw(canvasServerImageCtx);\n                                        }\n\n                                        // Draw the last canvas onto the background one.\n                                        canvasBackgroundCtx.drawImage(canvasServerImage,\n                                                0, 0);\n\n                                        // Now go through the pathsNotHandled array and\n                                        // remove the paths that were already handled by\n                                        // the server.\n                                        while (pathsNotHandled.length > 0\n                                                && pathsNotHandled[0].id <= maxLastHandledId)\n                                            pathsNotHandled.shift();\n\n                                        // Now me must draw the remaining paths onto\n                                        // the background canvas.\n                                        for (var i = 0; i < pathsNotHandled.length; i++) {\n                                            pathsNotHandled[i].path.draw(canvasBackgroundCtx);\n                                        }\n\n                                        refreshDisplayCanvas();\n                                    }\n                                }\n                            }\n                        }\n                    };\n\n                    socket.onmessage = function(message) {\n                        eventForwarder.callFunction(function() {\n                            handleOnMessage(message);\n                        });\n                    };\n\n                }\n\n\n                function refreshPlayerCount() {\n                    labelPlayerCount.nodeValue = String(playerCount);\n                }\n\n                function refreshDisplayCanvas() {\n                    if (!isActive) { // Don't draw a curser when not active.\n                        return;\n                    }\n\n                    canvasDisplayCtx.drawImage(canvasBackground, 0, 0);\n                    if (currentPreviewPath != null) {\n                        // Draw the preview path.\n                        currentPreviewPath.draw(canvasDisplayCtx);\n\n                    } else if (mouseInWindow && !mouseDown) {\n                        canvasDisplayCtx.beginPath();\n                        var color = availableColors[currentColorIndex].slice(0);\n                        color[3] = previewTransparency;\n                        canvasDisplayCtx.fillStyle = rgb(color);\n\n                        canvasDisplayCtx.arc(currentMouseX, currentMouseY,\n                                availableThicknesses[currentThicknessIndex] / 2,\n                                0, Math.PI * 2.0, true);\n                        canvasDisplayCtx.fill();\n                    }\n\n                }\n\n                function startControls() {\n                    isActive = true;\n\n                    labelContainer.removeChild(placeholder);\n                    placeholder = undefined;\n\n                    labelContainer.appendChild(\n                            document.createTextNode(\"Number of Players: \"));\n                    labelContainer.appendChild(labelPlayerCount);\n\n\n                    drawContainer.style.display = \"block\";\n                    drawContainer.appendChild(canvasDisplay);\n\n                    drawContainer.appendChild(optionContainer);\n\n                    canvasMouseDownHandler = function(e) {\n                        if (e.button == 0) {\n                            currentMouseX = e.pageX - canvasDisplay.offsetLeft;\n                            currentMouseY = e.pageY - canvasDisplay.offsetTop;\n\n                            mouseDown = true;\n                            canvasMouseMoveHandler(e);\n\n                        } else if (mouseDown) {\n                            // Cancel drawing.\n                            mouseDown = false;\n                            currentPreviewPath = null;\n\n                            currentMouseX = e.pageX - canvasDisplay.offsetLeft;\n                            currentMouseY = e.pageY - canvasDisplay.offsetTop;\n\n                            refreshDisplayCanvas();\n                        }\n                    };\n                    canvasDisplay.addEventListener(\"mousedown\", canvasMouseDownHandler, false);\n\n                    canvasMouseMoveHandler = function(e) {\n                        var mouseX = e.pageX - canvasDisplay.offsetLeft;\n                        var mouseY = e.pageY - canvasDisplay.offsetTop;\n\n                        if (mouseDown) {\n                            var drawType = availableDrawTypes[currentDrawTypeIndex];\n\n                            if (drawType.continuous) {\n\n                                var path = new Path(drawType.id,\n                                        availableColors[currentColorIndex],\n                                        availableThicknesses[currentThicknessIndex],\n                                        currentMouseX, currentMouseY, mouseX,\n                                        mouseY, false);\n                                // Draw it on the background canvas.\n                                path.draw(canvasBackgroundCtx);\n\n                                // Send it to the sever.\n                                pushPath(path);\n\n                                // Refresh old coordinates\n                                currentMouseX = mouseX;\n                                currentMouseY = mouseY;\n\n                            } else {\n                                // Create a new preview path.\n                                var color = availableColors[currentColorIndex].slice(0);\n                                color[3] = previewTransparency;\n                                currentPreviewPath = new Path(drawType.id,\n                                        color,\n                                        availableThicknesses[currentThicknessIndex],\n                                        currentMouseX, currentMouseY, mouseX,\n                                        mouseY, false);\n                            }\n\n                            refreshDisplayCanvas();\n                        } else {\n                            currentMouseX = mouseX;\n                            currentMouseY = mouseY;\n\n                            if (mouseInWindow) {\n                                refreshDisplayCanvas();\n                            }\n                        }\n\n                    };\n                    document.addEventListener(\"mousemove\", canvasMouseMoveHandler, false);\n\n                    document.addEventListener(\"mouseup\", function(e) {\n                        if (e.button == 0) {\n                            if (mouseDown) {\n                                mouseDown = false;\n                                currentPreviewPath = null;\n\n                                var mouseX = e.pageX - canvasDisplay.offsetLeft;\n                                var mouseY = e.pageY - canvasDisplay.offsetTop;\n                                var drawType = availableDrawTypes[currentDrawTypeIndex];\n\n                                var path = new Path(drawType.id, availableColors[currentColorIndex],\n                                        availableThicknesses[currentThicknessIndex],\n                                        currentMouseX, currentMouseY, mouseX,\n                                        mouseY, true);\n                                // Draw it on the background canvas.\n                                path.draw(canvasBackgroundCtx);\n\n                                // Send it to the sever.\n                                pushPath(path);\n\n                                // Refresh old coordinates\n                                currentMouseX = mouseX;\n                                currentMouseY = mouseY;\n\n                                refreshDisplayCanvas();\n                            }\n                        }\n                    }, false);\n\n                    canvasDisplay.addEventListener(\"mouseout\", function(e) {\n                        mouseInWindow = false;\n                        refreshDisplayCanvas();\n                    }, false);\n\n                    canvasDisplay.addEventListener(\"mousemove\", function(e) {\n                        if (!mouseInWindow) {\n                            mouseInWindow = true;\n                            refreshDisplayCanvas();\n                        }\n                    }, false);\n\n\n                    // Create color and thickness controls.\n                    var colorContainersBox = document.createElement(\"div\");\n                    colorContainersBox.setAttribute(\"style\",\n                            \"margin: 4px; border: 1px solid #bbb; border-radius: 3px;\");\n                    optionContainer.appendChild(colorContainersBox);\n\n                    colorContainers = new Array(3 * 3 * 3);\n                    for (var i = 0; i < colorContainers.length; i++) {\n                        var colorContainer = colorContainers[i] =\n                            document.createElement(\"div\");\n                        var color = availableColors[i] =\n                            [\n                                Math.floor((i % 3) * 255 / 2),\n                                Math.floor((Math.floor(i / 3) % 3) * 255 / 2),\n                                Math.floor((Math.floor(i / (3 * 3)) % 3) * 255 / 2),\n                                1.0\n                            ];\n                        colorContainer.setAttribute(\"style\",\n                                \"margin: 3px; width: 18px; height: 18px; \"\n                                + \"float: left; background-color: \" + rgb(color));\n                        colorContainer.style.border = '2px solid #000';\n                        colorContainer.addEventListener(\"mousedown\", (function(ix) {\n                            return function() {\n                                setColor(ix);\n                            };\n                        })(i), false);\n\n                        colorContainersBox.appendChild(colorContainer);\n                    }\n\n                    var divClearLeft = document.createElement(\"div\");\n                    divClearLeft.setAttribute(\"style\", \"clear: left;\");\n                    colorContainersBox.appendChild(divClearLeft);\n\n\n                    var drawTypeContainersBox = document.createElement(\"div\");\n                    drawTypeContainersBox.setAttribute(\"style\",\n                           \"float: right; margin-right: 3px; margin-top: 1px;\");\n                    optionContainer.appendChild(drawTypeContainersBox);\n\n                    drawTypeContainers = new Array(availableDrawTypes.length);\n                    for (var i = 0; i < drawTypeContainers.length; i++) {\n                        var drawTypeContainer = drawTypeContainers[i] =\n                            document.createElement(\"div\");\n                        drawTypeContainer.setAttribute(\"style\",\n                                \"text-align: center; margin: 3px; padding: 0 3px;\"\n                                + \"height: 18px; float: left;\");\n                        drawTypeContainer.style.border = \"2px solid #000\";\n                        drawTypeContainer.appendChild(document.createTextNode(\n                                String(availableDrawTypes[i].name)));\n                        drawTypeContainer.addEventListener(\"mousedown\", (function(ix) {\n                            return function() {\n                                setDrawType(ix);\n                            };\n                        })(i), false);\n\n                        drawTypeContainersBox.appendChild(drawTypeContainer);\n                    }\n\n\n                    var thicknessContainersBox = document.createElement(\"div\");\n                    thicknessContainersBox.setAttribute(\"style\",\n                            \"margin: 3px; border: 1px solid #bbb; border-radius: 3px;\");\n                    optionContainer.appendChild(thicknessContainersBox);\n\n                    thicknessContainers = new Array(availableThicknesses.length);\n                    for (var i = 0; i < thicknessContainers.length; i++) {\n                        var thicknessContainer = thicknessContainers[i] =\n                            document.createElement(\"div\");\n                        thicknessContainer.setAttribute(\"style\",\n                                \"text-align: center; margin: 3px; width: 18px; \"\n                                + \"height: 18px; float: left;\");\n                        thicknessContainer.style.border = \"2px solid #000\";\n                        thicknessContainer.appendChild(document.createTextNode(\n                                String(availableThicknesses[i])));\n                        thicknessContainer.addEventListener(\"mousedown\", (function(ix) {\n                            return function() {\n                                setThickness(ix);\n                            };\n                        })(i), false);\n\n                        thicknessContainersBox.appendChild(thicknessContainer);\n                    }\n\n\n                    divClearLeft = document.createElement(\"div\");\n                    divClearLeft.setAttribute(\"style\", \"clear: left;\");\n                    thicknessContainersBox.appendChild(divClearLeft);\n\n\n                    setColor(0);\n                    setThickness(0);\n                    setDrawType(0);\n\n                }\n\n                function disableControls() {\n                    document.removeEventListener(\"mousedown\", canvasMouseDownHandler);\n                    document.removeEventListener(\"mousemove\", canvasMouseMoveHandler);\n                    mouseInWindow = false;\n                    refreshDisplayCanvas();\n\n                    isActive = false;\n                }\n\n                function pushPath(path) {\n\n                    // Push it into the pathsNotHandled array.\n                    var container = new PathIdContainer(path, nextMsgId++);\n                    pathsNotHandled.push(container);\n\n                    // Send the path to the server.\n                    var message = container.id + \"|\" + path.type + \",\"\n                            + path.color[0] + \",\" + path.color[1] + \",\"\n                            + path.color[2] + \",\"\n                            + Math.round(path.color[3] * 255.0) + \",\"\n                            + path.thickness + \",\" + path.x1 + \",\"\n                            + path.y1 + \",\" + path.x2 + \",\" + path.y2 + \",\"\n                            + (path.lastInChain ? \"1\" : \"0\");\n\n                    socket.send(\"1\" + message);\n                }\n\n                function setThickness(thicknessIndex) {\n                    if (typeof currentThicknessIndex !== \"undefined\")\n                        thicknessContainers[currentThicknessIndex]\n                            .style.borderColor = \"#000\";\n                    currentThicknessIndex = thicknessIndex;\n                    thicknessContainers[currentThicknessIndex]\n                        .style.borderColor = \"#d08\";\n                }\n\n                function setColor(colorIndex) {\n                    if (typeof currentColorIndex !== \"undefined\")\n                        colorContainers[currentColorIndex]\n                            .style.borderColor = \"#000\";\n                    currentColorIndex = colorIndex;\n                    colorContainers[currentColorIndex]\n                        .style.borderColor = \"#d08\";\n                }\n\n                function setDrawType(drawTypeIndex) {\n                    if (typeof currentDrawTypeIndex !== \"undefined\")\n                        drawTypeContainers[currentDrawTypeIndex]\n                            .style.borderColor = \"#000\";\n                    currentDrawTypeIndex = drawTypeIndex;\n                    drawTypeContainers[currentDrawTypeIndex]\n                        .style.borderColor = \"#d08\";\n                }\n\n\n                connect();\n\n            }\n\n\n            // Initialize the room\n            var room = new Room(document.getElementById(\"drawContainer\"));\n\n\n        }, false);\n\n    })();\n    ]]></script>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/snake.xhtml",
                    "method": "GET",
                    "evidence": "<script type=\"application/javascript\"><![CDATA[\n        \"use strict\";\n\n        var Game = {};\n\n        Game.fps = 30;\n        Game.socket = null;\n        Game.nextFrame = null;\n        Game.interval = null;\n        Game.direction = 'none';\n        Game.gridSize = 10;\n\n        function Snake() {\n            this.snakeBody = [];\n            this.color = null;\n        }\n\n        Snake.prototype.draw = function(context) {\n            for (var id in this.snakeBody) {\n                context.fillStyle = this.color;\n                context.fillRect(this.snakeBody[id].x, this.snakeBody[id].y, Game.gridSize, Game.gridSize);\n            }\n        };\n\n        Game.initialize = function() {\n            this.entities = [];\n            var canvas = document.getElementById('playground');\n            if (!canvas.getContext) {\n                Console.log('Error: 2d canvas not supported by this browser.');\n                return;\n            }\n            this.context = canvas.getContext('2d');\n            window.addEventListener('keydown', function (e) {\n                var code = e.keyCode;\n                if (code > 36 && code < 41) {\n                    switch (code) {\n                        case 37:\n                            if (Game.direction != 'east') Game.setDirection('west');\n                            break;\n                        case 38:\n                            if (Game.direction != 'south') Game.setDirection('north');\n                            break;\n                        case 39:\n                            if (Game.direction != 'west') Game.setDirection('east');\n                            break;\n                        case 40:\n                            if (Game.direction != 'north') Game.setDirection('south');\n                            break;\n                    }\n                }\n            }, false);\n            if (window.location.protocol == 'http:') {\n                Game.connect('ws://' + window.location.host + '/examples/websocket/snake');\n            } else {\n                Game.connect('wss://' + window.location.host + '/examples/websocket/snake');\n            }\n        };\n\n        Game.setDirection  = function(direction) {\n            Game.direction = direction;\n            Game.socket.send(direction);\n            Console.log('Sent: Direction ' + direction);\n        };\n\n        Game.startGameLoop = function() {\n            if (window.webkitRequestAnimationFrame) {\n                Game.nextFrame = function () {\n                    webkitRequestAnimationFrame(Game.run);\n                };\n            } else if (window.mozRequestAnimationFrame) {\n                Game.nextFrame = function () {\n                    mozRequestAnimationFrame(Game.run);\n                };\n            } else {\n                Game.interval = setInterval(Game.run, 1000 / Game.fps);\n            }\n            if (Game.nextFrame != null) {\n                Game.nextFrame();\n            }\n        };\n\n        Game.stopGameLoop = function () {\n            Game.nextFrame = null;\n            if (Game.interval != null) {\n                clearInterval(Game.interval);\n            }\n        };\n\n        Game.draw = function() {\n            this.context.clearRect(0, 0, 640, 480);\n            for (var id in this.entities) {\n                this.entities[id].draw(this.context);\n            }\n        };\n\n        Game.addSnake = function(id, color) {\n            Game.entities[id] = new Snake();\n            Game.entities[id].color = color;\n        };\n\n        Game.updateSnake = function(id, snakeBody) {\n            if (typeof Game.entities[id] != \"undefined\") {\n                Game.entities[id].snakeBody = snakeBody;\n            }\n        };\n\n        Game.removeSnake = function(id) {\n            Game.entities[id] = null;\n            // Force GC.\n            delete Game.entities[id];\n        };\n\n        Game.run = (function() {\n            var skipTicks = 1000 / Game.fps, nextGameTick = (new Date).getTime();\n\n            return function() {\n                while ((new Date).getTime() > nextGameTick) {\n                    nextGameTick += skipTicks;\n                }\n                Game.draw();\n                if (Game.nextFrame != null) {\n                    Game.nextFrame();\n                }\n            };\n        })();\n\n        Game.connect = (function(host) {\n            if ('WebSocket' in window) {\n                Game.socket = new WebSocket(host);\n            } else if ('MozWebSocket' in window) {\n                Game.socket = new MozWebSocket(host);\n            } else {\n                Console.log('Error: WebSocket is not supported by this browser.');\n                return;\n            }\n\n            Game.socket.onopen = function () {\n                // Socket open.. start the game loop.\n                Console.log('Info: WebSocket connection opened.');\n                Console.log('Info: Press an arrow key to begin.');\n                Game.startGameLoop();\n                setInterval(function() {\n                    // Prevent server read timeout.\n                    Game.socket.send('ping');\n                }, 5000);\n            };\n\n            Game.socket.onclose = function () {\n                Console.log('Info: WebSocket closed.');\n                Game.stopGameLoop();\n            };\n\n            Game.socket.onmessage = function (message) {\n                var packet = JSON.parse(message.data);\n                switch (packet.type) {\n                    case 'update':\n                        for (var i = 0; i < packet.data.length; i++) {\n                            Game.updateSnake(packet.data[i].id, packet.data[i].body);\n                        }\n                        break;\n                    case 'join':\n                        for (var j = 0; j < packet.data.length; j++) {\n                            Game.addSnake(packet.data[j].id, packet.data[j].color);\n                        }\n                        break;\n                    case 'leave':\n                        Game.removeSnake(packet.id);\n                        break;\n                    case 'dead':\n                        Console.log('Info: Your snake is dead, bad luck!');\n                        Game.direction = 'none';\n                        break;\n                    case 'kill':\n                        Console.log('Info: Head shot!');\n                        break;\n                }\n            };\n        });\n\n        var Console = {};\n\n        Console.log = (function(message) {\n            var console = document.getElementById('console');\n            var p = document.createElement('p');\n            p.style.wordWrap = 'break-word';\n            p.innerHTML = message;\n            console.appendChild(p);\n            while (console.childNodes.length > 25) {\n                console.removeChild(console.firstChild);\n            }\n            console.scrollTop = console.scrollHeight;\n        });\n\n        Game.initialize();\n\n\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            // Remove elements with \"noscript\" class - <noscript> is not allowed in XHTML\n            var noscripts = document.getElementsByClassName(\"noscript\");\n            for (var i = 0; i < noscripts.length; i++) {\n                noscripts[i].parentNode.removeChild(noscripts[i]);\n            }\n        }, false);\n\n        ]]></script>"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/chat.xhtml",
                    "method": "GET",
                    "evidence": "<script type=\"application/javascript\"><![CDATA[\n        \"use strict\";\n\n        var Chat = {};\n\n        Chat.socket = null;\n\n        Chat.connect = (function(host) {\n            if ('WebSocket' in window) {\n                Chat.socket = new WebSocket(host);\n            } else if ('MozWebSocket' in window) {\n                Chat.socket = new MozWebSocket(host);\n            } else {\n                Console.log('Error: WebSocket is not supported by this browser.');\n                return;\n            }\n\n            Chat.socket.onopen = function () {\n                Console.log('Info: WebSocket connection opened.');\n                document.getElementById('chat').onkeydown = function(event) {\n                    if (event.keyCode == 13) {\n                        Chat.sendMessage();\n                    }\n                };\n            };\n\n            Chat.socket.onclose = function () {\n                document.getElementById('chat').onkeydown = null;\n                Console.log('Info: WebSocket closed.');\n            };\n\n            Chat.socket.onmessage = function (message) {\n                Console.log(message.data);\n            };\n        });\n\n        Chat.initialize = function() {\n            if (window.location.protocol == 'http:') {\n                Chat.connect('ws://' + window.location.host + '/examples/websocket/chat');\n            } else {\n                Chat.connect('wss://' + window.location.host + '/examples/websocket/chat');\n            }\n        };\n\n        Chat.sendMessage = (function() {\n            var message = document.getElementById('chat').value;\n            if (message != '') {\n                Chat.socket.send(message);\n                document.getElementById('chat').value = '';\n            }\n        });\n\n        var Console = {};\n\n        Console.log = (function(message) {\n            var console = document.getElementById('console');\n            var p = document.createElement('p');\n            p.style.wordWrap = 'break-word';\n            p.innerHTML = message;\n            console.appendChild(p);\n            while (console.childNodes.length > 25) {\n                console.removeChild(console.firstChild);\n            }\n            console.scrollTop = console.scrollHeight;\n        });\n\n        Chat.initialize();\n\n\n        document.addEventListener(\"DOMContentLoaded\", function() {\n            // Remove elements with \"noscript\" class - <noscript> is not allowed in XHTML\n            var noscripts = document.getElementsByClassName(\"noscript\");\n            for (var i = 0; i < noscripts.length; i++) {\n                noscripts[i].parentNode.removeChild(noscripts[i]);\n            }\n        }, false);\n\n    ]]></script>"
                }
            ]
        },
        "id": "5dd336c5-48cf-4b26-84b6-a226972b8eaa"
    },
    {
        "name": "Trace.axd Information Leak",
        "description": "The ASP.NET Trace Viewer (trace.axd) was found to be available. This component can leak a significant amount of valuable information.",
        "category": "Trace.axd Information Leak",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "1",
            "zap_solution": "Consider whether or not Trace Viewer is actually required in production, if it isn't then disable it. If it is then ensure access to it requires authentication and authorization.",
            "zap_otherinfo": null,
            "zap_reference": "https://msdn.microsoft.com/en-us/library/bb386420.aspxhttps://msdn.microsoft.com/en-us/library/wwh16c6c.aspxhttps://www.dotnetperls.com/trace",
            "zap_cweid": "215",
            "zap_wascid": "13",
            "zap_riskcode": "2",
            "zap_pluginid": "40029",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/security/protected/trace.axd",
                    "method": "GET",
                    "evidence": "HTTP/1.1 200 OK"
                }
            ]
        },
        "id": "17bb0739-5370-4807-b833-b32d057e77b1"
    },
    {
        "name": "Cookie No HttpOnly Flag",
        "description": "A cookie has been set without the HttpOnly flag, which means that the cookie can be accessed by JavaScript. If a malicious script can be run on this page then the cookie will be accessible and can be transmitted to another site. If this is a session cookie then session hijacking may be possible.",
        "category": "Cookie No HttpOnly Flag",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Ensure that the HttpOnly flag is set for all cookies.",
            "zap_otherinfo": null,
            "zap_reference": "https://owasp.org/www-community/HttpOnly",
            "zap_cweid": "16",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10010",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "ZAP",
                    "evidence": "Set-Cookie: ZAP"
                }
            ]
        },
        "id": "fffc9905-5c3d-4854-906e-f77a33772f4c"
    },
    {
        "name": "Session ID in URL Rewrite",
        "description": "URL rewrite is used to track user session ID. The session ID may be disclosed via cross-site referer header. In addition, the session ID might be stored in browser history or server logs.",
        "category": "Session ID in URL Rewrite",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "3",
            "zap_solution": "For secure content, put session ID in a cookie. To be even more secure consider using a combination of cookie and URL rewrite.",
            "zap_otherinfo": null,
            "zap_reference": "http://seclists.org/lists/webappsec/2002/Oct-Dec/0111.html",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "2",
            "zap_pluginid": "3",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=ZAP&datavalue=ZAP",
                    "method": "GET",
                    "evidence": "jsessionid=6E125575EE927DEA79BD6D83AF048EC5"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5",
                    "method": "POST",
                    "evidence": "jsessionid=6E125575EE927DEA79BD6D83AF048EC5"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/SessionExample;jsessionid=6E125575EE927DEA79BD6D83AF048EC5?dataname=foo&datavalue=bar",
                    "method": "GET",
                    "evidence": "jsessionid=6E125575EE927DEA79BD6D83AF048EC5"
                }
            ]
        },
        "id": "8b2a30ff-c412-4bdd-b636-5fa4d863f27a"
    },
    {
        "name": "Information Disclosure - Sensitive Information in URL",
        "description": "The request appeared to contain sensitive information leaked in the URL. This can violate PCI and most organizational compliance policies. You can configure the list of strings for this check to add or remove values specific to your environment.",
        "category": "Information Disclosure - Sensitive Information in URL",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Do not pass sensitive information in URIs.",
            "zap_otherinfo": "The URL contains email address(es).",
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10024",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/cal/cal1.jsp?action=Submit&email=foo-bar%40example.com&name=ZAP",
                    "method": "GET",
                    "param": "email",
                    "evidence": "foo-bar@example.com"
                }
            ]
        },
        "id": "21b9c207-218b-461e-90c6-3f22193e9cc0"
    },
    {
        "name": "XSLT Injection",
        "description": "Injection using XSL transformations may be possible, and may allow an attacker to read system information, read and write files, and/or execute arbitrary code.",
        "category": "XSLT Injection",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Sanitize and analyze every user input coming from any client-side.",
            "zap_otherinfo": "The XSLT processor vendor name \"Apache\" was returned after an injection request.",
            "zap_reference": "https://www.contextis.com/blog/xslt-server-side-injection-attacks",
            "zap_cweid": "91",
            "zap_wascid": "23",
            "zap_riskcode": "2",
            "zap_pluginid": "90017",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "cookiename",
                    "attack": "<xsl:value-of select=\"system-property('xsl:vendor')\"/>",
                    "evidence": "Apache"
                }
            ]
        },
        "id": "09b7aa99-178b-4c67-a324-c37d815e823f"
    },
    {
        "name": "Private IP Disclosure",
        "description": "A private IP (such as 10.x.x.x, 172.x.x.x, 192.168.x.x) or an Amazon EC2 private hostname (for example, ip-10-0-56-78) has been found in the HTTP response body. This information might be helpful for further attacks targeting internal systems.",
        "category": "Private IP Disclosure",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "4",
            "zap_solution": "Remove the private IP address from the HTTP response body.  For comments, use JSP/ASP/PHP comment instead of HTML/JavaScript comment which can be seen by client browsers.",
            "zap_otherinfo": "192.168.1.75192.168.111.1192.168.111.1",
            "zap_reference": "https://tools.ietf.org/html/rfc1918",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "2",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/monitoring.html",
                    "method": "GET",
                    "evidence": "192.168.1.75"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/jsp/snp/snoop.jsp",
                    "method": "GET",
                    "evidence": "10.1.20.40"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/RequestInfoExample",
                    "method": "GET",
                    "evidence": "10.1.20.40"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/config/filter.html",
                    "method": "GET",
                    "evidence": "192.168.0.10"
                }
            ]
        },
        "id": "825659fd-8810-4d26-a8df-38889f51c932"
    },
    {
        "name": "Format String Error",
        "description": "A Format String error occurs when the submitted data of an input string is evaluated as a command by the application. ",
        "category": "Format String Error",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "2",
            "zap_solution": "Rewrite the background program using proper deletion of bad character strings.  This will require a recompile of the background executable.",
            "zap_otherinfo": "Potential Format String Error.  The script closed the connection on a /%s",
            "zap_reference": "https://owasp.org/www-community/attacks/Format_string_attack",
            "zap_cweid": "134",
            "zap_wascid": "6",
            "zap_riskcode": "2",
            "zap_pluginid": "30002",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "cookievalue",
                    "attack": "ZAP%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s\n"
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/servlets/servlet/CookieExample",
                    "method": "POST",
                    "param": "cookiename",
                    "attack": "ZAP%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s%n%s\n"
                }
            ]
        },
        "id": "a5f736e5-25f0-4fd8-9acc-cb1c71630a6c"
    },
    {
        "name": "Information Disclosure - Debug Error Messages",
        "description": "The response appeared to contain common error messages returned by platforms such as ASP.NET, and Web-servers such as IIS and Apache. You can configure the list of common debug messages.",
        "category": "Information Disclosure - Debug Error Messages",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "1",
            "zap_solution": "Disable debugging messages before pushing to production.",
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10023",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/docs/changelog.html",
                    "method": "GET",
                    "evidence": "internal server error"
                }
            ]
        },
        "id": "91546e07-cfe7-4006-95a4-69114ec65951"
    },
    {
        "name": "Weak Authentication Method",
        "description": "HTTP basic or digest authentication has been used over an unsecured connection. The credentials can be read and then reused by someone with access to the network.",
        "category": "Weak Authentication Method",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "3",
            "zap_solution": "Protect the connection using HTTPS or use a stronger authentication mechanism",
            "zap_otherinfo": null,
            "zap_reference": "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
            "zap_cweid": "326",
            "zap_wascid": "4",
            "zap_riskcode": "2",
            "zap_pluginid": "10105",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/manager/status",
                    "method": "GET",
                    "evidence": "WWW-Authenticate: Basic realm=\"Tomcat Manager Application\""
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/manager/html",
                    "method": "GET",
                    "evidence": "WWW-Authenticate: Basic realm=\"Tomcat Manager Application\""
                },
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/host-manager/html",
                    "method": "GET",
                    "evidence": "WWW-Authenticate: Basic realm=\"Tomcat Host Manager Application\""
                }
            ]
        },
        "id": "daabbeee-6380-4b14-923d-f0a730ab6d79"
    },
    {
        "name": "Dangerous JS Functions",
        "description": "A dangerous JS function seems to be in use that would leave the site vulnerable.",
        "category": "Dangerous JS Functions",
        "location": "http://bodgeit.demo-apps.svc:8080",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "bodgeit.demo-apps.svc",
            "zap_confidence": "1",
            "zap_count": "1",
            "zap_solution": "See the references for security advice on the use of these functions.",
            "zap_otherinfo": null,
            "zap_reference": "https://angular.io/guide/security",
            "zap_cweid": "749",
            "zap_wascid": null,
            "zap_riskcode": "1",
            "zap_pluginid": "10110",
            "zap_finding_urls": [
                {
                    "uri": "http://bodgeit.demo-apps.svc:8080/examples/websocket/drawboard.xhtml",
                    "method": "GET",
                    "evidence": "eVal"
                }
            ]
        },
        "id": "720769b2-8e67-40b7-9922-17160a083a7d"
    }
]

```


</TabItem>


</Tabs>
          
</TabItem>
          
<TabItem value="demo-juice-shop-baseline-scan">
  
<div>

</div>

<Tabs
defaultValue="sc"
values={[
  {label: 'Scan', value: 'sc'}, 
  {label: 'Findings', value: 'fd'},
]}>


<TabItem value="sc">

```yaml

apiVersion: "execution.experimental.securecodebox.io/v1"
kind: Scan
metadata:
  name: "zap-baseline-juiceshop"
  labels:
    organization: "OWASP"
spec:
  scanType: "zap-baseline"
  parameters:
    # target URL including the protocol
    - "-t"
    - "http://juice-shop.demo-apps.svc:3000"
    # show debug messages
    - "-d"
    # use the Ajax spider in addition to the traditional one
    - "-j"                
    # the number of minutes to spider for (default 1)
    - "-m"
    - "3"
        

```

</TabItem>



<TabItem value="fd">


<span>
The findings are too large to display, you may download
<a target="_blank" href='/public/findings/zap-demo-juice-shop-baseline-scan-findings.yaml' download> the file.</a>
</span>


</TabItem>


</Tabs>
          
</TabItem>
          
<TabItem value="demo-juice-shop-full-scan">
  
<div>

</div>

<Tabs
defaultValue="sc"
values={[
  {label: 'Scan', value: 'sc'}, 
  {label: 'Findings', value: 'fd'},
]}>


<TabItem value="sc">

```yaml

apiVersion: "execution.experimental.securecodebox.io/v1"
kind: Scan
metadata:
  name: "zap-full-scan-juiceshop"
  labels:
    organization: "OWASP"
spec:
  scanType: "zap-full-scan"
  parameters:
    # target URL including the protocol
    - "-t"
    - "http://juice-shop.demo-apps.svc:3000"
    # include the alpha active and passive scan rules as well
    - "-a"                
    # show debug messages
    - "-d"
    # use the Ajax spider in addition to the traditional one
    - "-j"                
    # the number of minutes to spider for (default 1)
    - "-m"
    - "3"
        

```

</TabItem>



<TabItem value="fd">


<span>
The findings are too large to display, you may download
<a target="_blank" href='/public/findings/zap-demo-juice-shop-full-scan-findings.yaml' download> the file.</a>
</span>


</TabItem>


</Tabs>
          
</TabItem>
          
<TabItem value="demo-petstore-api-scan">
  
<div>

</div>

<Tabs
defaultValue="sc"
values={[
  {label: 'Scan', value: 'sc'}, 
  {label: 'Findings', value: 'fd'},
]}>


<TabItem value="sc">

```yaml

apiVersion: "execution.experimental.securecodebox.io/v1"
kind: Scan
metadata:
  name: "zap-api-petstore"
  labels:
    organization: "OWASP"
spec:
  scanType: "zap-api-scan"
  parameters:
    # target URL including the protocol
    - "-t"
    - "http://swagger-petstore.demo-apps.svc/v2/swagger.json"
    # format can either 'openapi' or 'soap'
    - "-f"
    - "openapi"
    # include the alpha passive scan rules as well
    # - "-a"
    # show debug messages
    - "-d"
    # the number of minutes to spider for (default 1)
    - "-m"
    - "3"


```

</TabItem>



<TabItem value="fd">


```yaml

[
    {
        "name": "X-Content-Type-Options Header Missing",
        "description": "The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.",
        "category": "X-Content-Type-Options Header Missing",
        "location": "http://swagger-petstore.demo-apps.svc",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "swagger-petstore.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "10",
            "zap_solution": "Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.",
            "zap_otherinfo": "This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.At \"High\" threshold this scanner will not alert on client or server error responses.",
            "zap_reference": "http://msdn.microsoft.com/en-us/library/ie/gg622941%28v=vs.85%29.aspxhttps://owasp.org/www-community/Security_Headers",
            "zap_cweid": "16",
            "zap_wascid": "15",
            "zap_riskcode": "1",
            "zap_pluginid": "10021",
            "zap_finding_urls": [
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/inventory",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order/10",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/swagger.json",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order",
                    "method": "POST",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/login?username=username&password=ZAP",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet",
                    "method": "PUT",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/findByTags?tags=tags",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet",
                    "method": "POST",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/findByStatus?status=available",
                    "method": "GET",
                    "param": "X-Content-Type-Options"
                }
            ]
        },
        "id": "dea30acd-f3cb-43b4-97a2-9fd40c434792"
    },
    {
        "name": "Cross-Domain Misconfiguration",
        "description": "Web browser data loading may be possible, due to a Cross Origin Resource Sharing (CORS) misconfiguration on the web server",
        "category": "Cross-Domain Misconfiguration",
        "location": "http://swagger-petstore.demo-apps.svc",
        "osi_layer": "APPLICATION",
        "severity": "MEDIUM",
        "attributes": {
            "host": "swagger-petstore.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "21",
            "zap_solution": "Ensure that sensitive data is not available in an unauthenticated manner (using IP address white-listing, for instance).Configure the \"Access-Control-Allow-Origin\" HTTP header to a more restrictive set of domains, or remove all CORS headers entirely, to allow the web browser to enforce the Same Origin Policy (SOP) in a more restrictive manner.",
            "zap_otherinfo": "The CORS misconfiguration on the web server permits cross-domain read requests from arbitrary third party domains, using unauthenticated APIs on this domain. Web browser implementations do not permit arbitrary third parties to read the response from authenticated APIs, however. This reduces the risk somewhat. This misconfiguration could be used by an attacker to access data that is available in an unauthenticated manner, but which uses some other form of security, such as IP address white-listing.",
            "zap_reference": "http://www.hpenterprisesecurity.com/vulncat/en/vulncat/vb/html5_overly_permissive_cors_policy.html",
            "zap_cweid": "264",
            "zap_wascid": "14",
            "zap_riskcode": "2",
            "zap_pluginid": "10098",
            "zap_finding_urls": [
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/login?username=username&password=ZAP",
                    "method": "GET",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username",
                    "method": "GET",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet",
                    "method": "PUT",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet",
                    "method": "POST",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10",
                    "method": "DELETE",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order",
                    "method": "POST",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username",
                    "method": "PUT",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10",
                    "method": "GET",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10",
                    "method": "POST",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user",
                    "method": "POST",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/findByStatus?status=available",
                    "method": "GET",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/inventory",
                    "method": "GET",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10/uploadImage",
                    "method": "POST",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order/10",
                    "method": "GET",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/logout",
                    "method": "GET",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/createWithArray",
                    "method": "POST",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/swagger.json",
                    "method": "GET",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/createWithList",
                    "method": "POST",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order/10",
                    "method": "DELETE",
                    "evidence": "Access-Control-Allow-Origin: *"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username",
                    "method": "DELETE",
                    "evidence": "Access-Control-Allow-Origin: *"
                }
            ]
        },
        "id": "58d17ff9-ff1e-4dc7-b576-95cad3b99cf2"
    },
    {
        "name": "A Client Error response code was returned by the server",
        "description": "A response code of 404 was returned by the server.This may indicate that the application is failing to handle unexpected input correctly.Raised by the 'Alert on HTTP Response Code Error' script",
        "category": "A Client Error response code was returned by the server",
        "location": "http://swagger-petstore.demo-apps.svc",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "swagger-petstore.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "41",
            "zap_solution": null,
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "388",
            "zap_wascid": "20",
            "zap_riskcode": "0",
            "zap_pluginid": "100000",
            "zap_finding_urls": [
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/2826924580843642668",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10/uploadImage/",
                    "method": "POST",
                    "evidence": "HTTP/1.1 415"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username/",
                    "method": "DELETE",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order/10/",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order",
                    "method": "GET",
                    "evidence": "HTTP/1.1 405"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username",
                    "method": "DELETE",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/trace.axd",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10/.htaccess",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/trace.axd",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username/",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/",
                    "method": "GET",
                    "evidence": "HTTP/1.1 405"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet",
                    "method": "GET",
                    "evidence": "HTTP/1.1 405"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/.htaccess",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/.htaccess",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/7748677433108351032",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10/trace.axd",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order/",
                    "method": "GET",
                    "evidence": "HTTP/1.1 405"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10/3673112191056276290",
                    "method": "GET",
                    "evidence": "HTTP/1.1 404"
                }
            ]
        },
        "id": "86067e76-745d-4ef6-b30e-2424068fa84e"
    },
    {
        "name": "Server Leaks Version Information via \"Server\" HTTP Response Header Field",
        "description": "The web/application server is leaking version information via the \"Server\" HTTP response header. Access to such information may facilitate attackers identifying other vulnerabilities your web/application server is subject to.",
        "category": "Server Leaks Version Information via \"Server\" HTTP Response Header Field",
        "location": "http://swagger-petstore.demo-apps.svc",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "swagger-petstore.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "21",
            "zap_solution": "Ensure that your web server, application server, load balancer, etc. is configured to suppress the \"Server\" header or provide generic details.",
            "zap_otherinfo": null,
            "zap_reference": "http://httpd.apache.org/docs/current/mod/core.html#servertokenshttp://msdn.microsoft.com/en-us/library/ff648552.aspx#ht_urlscan_007http://blogs.msdn.com/b/varunm/archive/2013/04/23/remove-unwanted-http-response-headers.aspxhttp://www.troyhunt.com/2012/02/shhh-dont-let-your-response-headers.html",
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "1",
            "zap_pluginid": "10036",
            "zap_finding_urls": [
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10/uploadImage",
                    "method": "POST",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user",
                    "method": "POST",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order/10",
                    "method": "DELETE",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/inventory",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order/10",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/createWithArray",
                    "method": "POST",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/findByTags?tags=tags",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10",
                    "method": "DELETE",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order",
                    "method": "POST",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username",
                    "method": "PUT",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/findByStatus?status=available",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet",
                    "method": "PUT",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10",
                    "method": "POST",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/createWithList",
                    "method": "POST",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/logout",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username",
                    "method": "DELETE",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/swagger.json",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/login?username=username&password=ZAP",
                    "method": "GET",
                    "evidence": "Jetty(9.2.9.v20150224)"
                }
            ]
        },
        "id": "e54a548f-1c41-4baa-9614-42be2f5eeeb8"
    },
    {
        "name": "Unexpected Content-Type was returned",
        "description": "A Content-Type of text/html was returned by the server.This is not one of the types expected to be returned by an API.Raised by the 'Alert on Unexpected Content Types' script",
        "category": "Unexpected Content-Type was returned",
        "location": "http://swagger-petstore.demo-apps.svc",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "swagger-petstore.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "7",
            "zap_solution": null,
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": null,
            "zap_wascid": null,
            "zap_riskcode": "1",
            "zap_pluginid": "100001",
            "zap_finding_urls": [
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/.htaccess",
                    "method": "GET",
                    "evidence": "text/html"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc",
                    "method": "GET",
                    "evidence": "text/html"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/",
                    "method": "GET",
                    "evidence": "text/html"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/elmah.axd",
                    "method": "GET",
                    "evidence": "text/html"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/trace.axd",
                    "method": "GET",
                    "evidence": "text/html"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/2826924580843642668",
                    "method": "GET",
                    "evidence": "text/html"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet/10/",
                    "method": "POST",
                    "evidence": "text/html"
                }
            ]
        },
        "id": "75540c90-04c8-45a4-bc86-9b8e5a97e46e"
    },
    {
        "name": "Information Disclosure - Sensitive Information in URL",
        "description": "The request appeared to contain sensitive information leaked in the URL. This can violate PCI and most organizational compliance policies. You can configure the list of strings for this check to add or remove values specific to your environment.",
        "category": "Information Disclosure - Sensitive Information in URL",
        "location": "http://swagger-petstore.demo-apps.svc",
        "osi_layer": "APPLICATION",
        "severity": "INFORMATIONAL",
        "attributes": {
            "host": "swagger-petstore.demo-apps.svc",
            "zap_confidence": "2",
            "zap_count": "2",
            "zap_solution": "Do not pass sensitive information in URIs.",
            "zap_otherinfo": "The URL contains potentially sensitive information. The following string was found via the pattern: passpassword",
            "zap_reference": null,
            "zap_cweid": "200",
            "zap_wascid": "13",
            "zap_riskcode": "0",
            "zap_pluginid": "10024",
            "zap_finding_urls": [
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/login?username=username&password=ZAP",
                    "method": "GET",
                    "param": "password",
                    "evidence": "password"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/login?username=username&password=ZAP",
                    "method": "GET",
                    "param": "username",
                    "evidence": "username"
                }
            ]
        },
        "id": "b69167f7-ee9a-4606-a55f-0733ba094525"
    },
    {
        "name": "A Server Error response code was returned by the server",
        "description": "A response code of 500 was returned by the server.This may indicate that the application is failing to handle unexpected input correctly.Raised by the 'Alert on HTTP Response Code Error' script",
        "category": "A Server Error response code was returned by the server",
        "location": "http://swagger-petstore.demo-apps.svc",
        "osi_layer": "APPLICATION",
        "severity": "LOW",
        "attributes": {
            "host": "swagger-petstore.demo-apps.svc",
            "zap_confidence": "3",
            "zap_count": "7",
            "zap_solution": null,
            "zap_otherinfo": null,
            "zap_reference": null,
            "zap_cweid": "388",
            "zap_wascid": "20",
            "zap_riskcode": "1",
            "zap_pluginid": "100000",
            "zap_finding_urls": [
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/store/order",
                    "method": "POST",
                    "evidence": "HTTP/1.1 500"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/createWithList",
                    "method": "POST",
                    "evidence": "HTTP/1.1 500"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet",
                    "method": "POST",
                    "evidence": "HTTP/1.1 500"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/pet",
                    "method": "PUT",
                    "evidence": "HTTP/1.1 500"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user",
                    "method": "POST",
                    "evidence": "HTTP/1.1 500"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/createWithArray",
                    "method": "POST",
                    "evidence": "HTTP/1.1 500"
                },
                {
                    "uri": "http://swagger-petstore.demo-apps.svc/v2/user/username",
                    "method": "PUT",
                    "evidence": "HTTP/1.1 500"
                }
            ]
        },
        "id": "dc81e191-d6c7-4893-9acf-597b8befa7e7"
    }
]

```


</TabItem>


</Tabs>
          
</TabItem>
          
</Tabs>