---
title: "kube-hunter"
path: "scanners/kube-hunter"
category: "scanner"
type: "Kubernetes"
state: "released"
appVersion: "0.3.1"
usecase: "Kubernetes Vulnerability Scanner"
---

kube-hunter hunts for security weaknesses in Kubernetes clusters. The tool was developed to increase awareness and visibility for security issues in Kubernetes environments. You should NOT run kube-hunter on a Kubernetes cluster that you don't own!

To learn more about the kube-hunter scanner itself visit [kube-hunter GitHub] or [kube-hunter Website].

<!-- end -->

## Deployment

The kube-hunter ScanType can be deployed via helm:

```bash
helm upgrade --install kube-hunter ./scanners/kube-hunter/
```

## Configuration

The following security scan configuration example are based on the [kube-hunter Documentation], please take a look at the original documentation for more configuration examples.

* To specify remote machines for hunting, select option 1 or use the --remote option. Example: `kube-hunter --remote some.node.com`
* To specify interface scanning, you can use the --interface option (this will scan all of the machine's network interfaces). Example: `kube-hunter --interface`
* To specify a specific CIDR to scan, use the --cidr option. Example: `kube-hunter --cidr 192.168.0.0/24`

[kube-hunter Website]: https://kube-hunter.aquasec.com/
[kube-hunter GitHub]: https://github.com/aquasecurity/kube-hunter
[kube-hunter Documentation]: https://github.com/aquasecurity/kube-hunter#scanning-options