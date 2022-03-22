var store = [{
        "title": "Kubernetes Architecture",
        "excerpt":"Kubernetes Architecture Kubernetes Architecture https://kubernetes.io/docs/concepts/overview/components/ Control Plane Etcd—A distributed data store which persists cluster configuration API Server—Central communication hub for all Kubernetes components This is also the endpoint used by Kubernetes clients, such as the kubectl CLI Scheduler—The component responsible for assigning application components to worker nodes Controller Manager—Handles cluster-level...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/01/28/kubernetes-architecture.html",
        "teaser": "/blog/assets/images/kubernetes-std-app.png"
      },{
        "title": "Welcome to Kubernetes",
        "excerpt":"Kubernetes Introduction Google has created a resource in the form of a comic to understand why Kubernetes and what problems can be addressed by Kubernetes. Here is the link to the same. https://cloud.google.com/kubernetes-engine/kubernetes-comic And here is an extract: Learning Resources While there are many resources out there, personally I have...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/01/28/kubernetes-intro.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Labels",
        "excerpt":"Kubernetes Labels Show Labels pradeep@learnk8s$ kubectl get pods --show-labels NAME READY STATUS RESTARTS AGE LABELS demo-6c54f77c95-6g7zq 1/1 Running 0 3m32s app=demo,pod-template-hash=6c54f77c95 demo-6c54f77c95-sb4c9 1/1 Running 0 3m32s app=demo,pod-template-hash=6c54f77c95 demo-6c54f77c95-w2bsw 1/1 Running 0 3m32s app=demo,pod-template-hash=6c54f77c95 nginx 1/1 Running 0 8m6s run=nginx pradeep@learnk8s$ kubectl get nodes --show-labels NAME STATUS ROLES AGE VERSION LABELS...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/01/28/kubernetes-labels.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Core Components",
        "excerpt":"Kubernetes Core Components Namespace Defaults pradeep@learnk8s$ kubectl get namespaces NAME STATUS AGE default Active 2m7s kube-node-lease Active 2m10s kube-public Active 2m10s kube-system Active 2m10s As we saw at the beginning, when we setup a kubernetes cluster, all control plane and worker node compononets gets installed as pods in the system...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/01/28/kubernetes-namespaces.html",
        "teaser": "/blog/assets/images/calico.png"
      },{
        "title": "Working with Kubernetes Resources ",
        "excerpt":"Working with Kubernetes Resources Deleting Resources pradeep@learnk8s$ kubectl delete pod demo-75f9c7566f-fct76 pod \"demo-75f9c7566f-fct76\" deleted pradeep@learnk8s$ kubectl get pods NAME READY STATUS RESTARTS AGE demo-75f9c7566f-b45x7 0/1 ContainerCreating 0 3s demo-75f9c7566f-kz9kb 1/1 Running 0 55m demo-75f9c7566f-nmjw2 1/1 Running 0 65m pradeep@learnk8s$ kubectl get all NAME READY STATUS RESTARTS AGE pod/demo-75f9c7566f-b45x7 1/1 Running...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/01/28/kubernetes-resources-creation-deletion.html",
        "teaser": "/blog/assets/images/calico.png"
      },{
        "title": "Kubernetes Services",
        "excerpt":"Kubernetes Services Services ClusterIP: Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default ServiceType. NodePort: Exposes the Service on each Node’s IP at a static port (the NodePort). A ClusterIP Service, to which the NodePort Service...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/01/28/kubernetes-services.html",
        "teaser": "/blog/assets/images/calico.png"
      },{
        "title": "Kubectl Describe and Explain",
        "excerpt":"Kubectl describe and explain Describe Resources pradeep@learnk8s$ kubectl describe pods nginx Name: nginx Namespace: default Priority: 0 Node: k8s-m02/192.168.177.28 Start Time: Fri, 04 Feb 2022 07:13:50 +0530 Labels: new-label=awesome run=nginx Annotations: &lt;none&gt; Status: Running IP: 10.244.1.6 IPs: IP: 10.244.1.6 Containers: nginx: Container ID: docker://32bfdccc6c984f51a4c4092e4027ff7f1e53dd518938196c95d5427a44a90e40 Image: nginx Image ID: docker-pullable://nginx@sha256:2834dc507516af02784808c5f48b7cbe38b8ed5d0f4837f16e78d00deb7e7767 Port:...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/04/kubectl-describe-explain.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes DaemonSets",
        "excerpt":"Kubernetes Daemon Sets Daemon Sets A DaemonSet ensures that all (or some) Nodes run a copy of a Pod. As nodes are added to the cluster, Pods are added to them. As nodes are removed from the cluster, those Pods are garbage collected. pradeep@learnk8s$ kubectl get daemonsets.apps -A NAMESPACE NAME...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/07/kubernetes-daemon-sets.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Logging and Monitoring",
        "excerpt":"Kubernetes Logging and Monitoring Logging and Monitoring To monitor cluster components, we need to deploy metrics-server. Metrics Server is a cluster-wide aggregator of resource usage data. Resource usage metrics, such as container CPU and memory usage, are available in Kubernetes through the Metrics API. These metrics can be accessed either...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/07/kubernetes-logging-monitoring.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Resource Limits",
        "excerpt":"Kubernetes Resource Limits Resource Limits Earlier, we have created a namespace called prod. Let’s describe it to see if any resource quota applied to it. pradeep@learnk8s$ kubectl describe namespaces prod Name: prod Labels: kubernetes.io/metadata.name=prod Annotations: &lt;none&gt; Status: Active No resource quota. No LimitRange resource. Let’s define a quota using the...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/07/kubernetes-resource-limits.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Scheduling",
        "excerpt":"Kubernetes Scheduling Scheduling Manual Scheduling Modify the Pod definition file, to includ the nodeName in the spec. pradeep@learnk8s$ cat manual-sched-pod.yaml apiVersion: v1 kind: Pod metadata: name: nginx-manual spec: nodeName: k8s containers: - image: nginx name: nginx pradeep@learnk8s$ kubectl create -f manual-sched-pod.yaml pod/nginx-manual created pradeep@learnk8s$ kubectl get pods NAME READY STATUS...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/07/kubernetes-scheduling.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "NITA: Network Implementation and Test Automation",
        "excerpt":"NITA is an open source platform for automating the building and testing of complex networks. https://github.com/Juniper/nita Ansible Jenkins Robot Framework Docker Installation The solution consists of several components: nita-webapp nita-jenkins nita-ansible nita-cli nita-robot nita-yaml-to-excel Let’s install NITA on a CentOS8 machine. [pradeep@nita ~]$ uname -a Linux nita 4.18.0-259.el8.x86_64 #1 SMP...","categories": ["Networking","Automation"],
        "tags": ["nita"],
        "url": "/blog/networking/automation/2022/02/09/nita.html",
        "teaser": "/blog/assets/images/nita-logo.png"
      },{
        "title": "Jenkins Process Automation",
        "excerpt":"Jenkins Getting started with Essentials of Jenkins. Jobs Create a first job of type Pipeline. For this first demo, we can make use of the sample Pipeline script by clicking try sample Pipeline. Builds With Parameters pipeline { agent any parameters { string(name: 'Greeting', defaultValue: 'Hello', description: 'How should I...","categories": ["Jenkins","Automation"],
        "tags": ["ci-cd"],
        "url": "/blog/jenkins/automation/2022/02/10/jenkins.html",
        "teaser": "/blog/assets/images/jenkins.svg"
      },{
        "title": "Kubernetes Multiple Schedulers",
        "excerpt":"Kubernetes Multiple Schedulers Multiple Schedulers Kubernetes ships with a default scheduler (kube-scheduler) that we discussed earlier. If the default scheduler does not suit your needs you can implement your own scheduler. Moreover, you can even run multiple schedulers simultaneously alongside the default scheduler and instruct Kubernetes what scheduler to use...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/11/kubernetes-multiple-schedulers.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Rolling Updates",
        "excerpt":"Kubernetes Rolling Update Application Life Cycle Management I ran into some issue with my cluster and had to rebuild from scratch. Here is how my new cluster looks like: pradeep@learnk8s$ kubectl get nodes -o wide NAME STATUS ROLES AGE VERSION INTERNAL-IP EXTERNAL-IP OS-IMAGE KERNEL-VERSION CONTAINER-RUNTIME k8s Ready control-plane,master 4m42s v1.23.1...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/11/kubernetes-rolling-update.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Static Pods",
        "excerpt":"Kubernetes Static Pods Static Pods Static Pods are managed directly by the kubelet daemon on a specific node, without the API server observing them. Unlike Pods that are managed by the control plane; instead, the kubelet watches each static Pod (and restarts it if it fails). The Pod names will...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/11/kubernetes-static-pods.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Certificates",
        "excerpt":"Kubernetes Certificates Security Certificates Take a look at the description of the kube-apiserver pod in the kube-system namespace. Pay attention to the kube-apiserver command arguments. It is a long list!! Primarily, there are many pairs of certfile and keyfile for apiserver, etcd, kubectl etc. In Minikube setup, most of these...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/15/kubernetes-certificates.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Passing Commands and Arguments to Kubernetes Resources",
        "excerpt":"Passing Commands and Arguments to Kubernetes Resources Commands and Arguments Let us make use of help, to understand the usage of commands and arguments. As shown here, with the help of --command option we can pass a different command and custom arguments to our container. pradeep@learnk8s$ kubectl run -h Create...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/15/kubernetes-commands-arguments.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Config Maps",
        "excerpt":"Kubernetes ConfigMaps ConfigMaps As seen in the explanation, ConfigMaps hold the configuration data for pods to consume. For example, we could store the color of the Webapp from the previous example, in the form of a ConfigMap. pradeep@learnk8s$ kubectl explain configmaps KIND: ConfigMap VERSION: v1 DESCRIPTION: ConfigMap holds configuration data...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/15/kubernetes-configmaps.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Environment Variables",
        "excerpt":"Kubernetes Environment Variables Environment Variables Now, it is time to try the other metod of passing arguments, via environment variables. From the kubectl run examples, we can see that environment variables can be set with the --env option. pradeep@learnk8s$ kubectl run -h Create and run a particular image in a...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/15/kubernetes-environment-variables.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Recreate Strategy",
        "excerpt":"Kubernetes Recreate Strategy Recreate There is another deployment strategy called Recreate. Let us edit the deployment again to use another version, v3, this time and change the strategy from RollingUpdate to Recreate. pradeep@learnk8s$ kubectl edit deployment kodekloud deployment.apps/kodekloud edited # Please edit the object below. Lines beginning with a '#'...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/15/kubernetes-recreate-strategy.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Secrets",
        "excerpt":"Kubernetes Secrets Secrets Secret holds secret data of a certain type. pradeep@learnk8s$ kubectl explain secrets KIND: Secret VERSION: v1 DESCRIPTION: Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes. &lt;SNIP&gt; Verify if there are any...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/15/kubernetes-secrets.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Init Containers",
        "excerpt":"Kubernetes Init Containers Init Containers Earlier, we saw that a Pod can have multiple containers running apps within it, but it can also have one or more init containers, which are run before the app containers are started. Init containers are exactly like regular containers, except: Init containers always run...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/16/kubernetes-init-containers.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Multi-container Pods",
        "excerpt":"Kubernetes Multi Container Pods Multi Container Pods As per Kubernetes documentation, The primary reason that Pods can have multiple containers is to support helper applications that assist a primary application. Typical examples of helper applications are data pullers, data pushers, and proxies. Helper and primary applications often need to communicate...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/16/kubernetes-multi-container-pods.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubectl Auth",
        "excerpt":"Kubectl Auth Kubectl Auth To Inspect authorization, we can make use of kubectl auth command. It will show an yes or no. Here is the related help and examples. pradeep@learnk8s$ kubectl auth can-i -h Check whether an action is allowed. VERB is a logical Kubernetes API verb like 'get', 'list',...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/17/kubectl-auth.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Certificates API",
        "excerpt":"Kubernetes Certificates API Certificates API Let us create a new user called pradeep and generate a key pair. Once the keypair is generated, created a certificate signing request to be submitted to the Kubernetes Cluster CA. $ sudo adduser -G wheel pradeep Changing password for pradeep New password: Bad password:...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/17/kubernetes-certificates-api.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Cluster Roles and RoleBindings",
        "excerpt":"Kubernetes Cluster Roles and Cluste RoleBindings Cluster Roles and Cluster Role Bindings If we notice, user pradeep still can’t get the nodes information. It is becuase, he still does not have access to resources at the cluster scope. pradeep@learnk8s$ kubectl get nodes Error from server (Forbidden): nodes is forbidden: User...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/17/kubernetes-clusterroles-clusterrolebindings.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Kube Config",
        "excerpt":"Kubernetes Kube Config Kube Config Kubectl command uses a configuration file that contains cluster and context information along with users. This configuration file can be viewed directly using the common commands like cat, or kubectl config view command. Usually the configuraiton is stored in a filed called config in the...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/17/kubernetes-kube-config.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Roles and RoleBindings",
        "excerpt":"Kubernetes Roles and RoleBindings We can see that the current user is k8s, how can we change this to some other user, like pradeep user? For that we need the signed certificate for that user first. We can retrieve the signed/issued certificate using this. Pay attention to the Status section,...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/17/kubernetes-roles-rolebindings.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Security Contexts",
        "excerpt":"Kubernetes Security Contexts Security Context To understand security context, first let us try to create a Pod without any security context and check few things like, whoami, id, and ps command outputs to verify the current user inside the Pod. pradeep@learnk8s$ cat no-security-context-demo.yaml apiVersion: v1 kind: Pod metadata: name: no-security-context-demo...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/19/kubernetes-security-context.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Storage Volumes",
        "excerpt":"Kubernetes Storage Volumes Storage Volumes emptyDir There are many volume types. An emptyDir volume is first created when a Pod is assigned to a node, and exists as long as that Pod is running on that node. When a Pod is removed from a node for any reason, the data...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/20/kubernetes-storage-volumes.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "IP Fabric with EVPN-VXLAN",
        "excerpt":"IP Fabric with EVPN-VXLAN To understand why EVPN-VXLAN, Juniper has created a simplified resource. You can watch the same here. Lab Setup Juniper vLabs provides multiple sandboxes for exploring various features and products of Juniper. In this post, let us make use of the EVPN-VXLAN sandbox which is available at...","categories": ["Networking"],
        "tags": ["evpn","vxlan","Junos"],
        "url": "/blog/networking/2022/02/22/evpn-vxlan.html",
        "teaser": "/blog/assets/images/junos.png"
      },{
        "title": "OpenShift",
        "excerpt":"RedHat OpenShift Getting Started with OpenShift. Learning Resources https://github.com/sandervanvugt/openshift OCP Kubernetes Distribution with additional features: Source Code Integration, CI/CD Service Mesh like Istio Integration CodeReady Containers https://developers.redhat.com/products/codeready-containers/overview Offerings RHOCP : RedHat OpenShift Container Platform: managed by customers (on-prem) RedHat OpenShift Dedicated: RedHat managed cluster in AWS/GCP/Azure/IBM Clouds RedHat OpenShift Online:...","categories": ["OpenShift","Automation"],
        "tags": ["redhat","codereadycontainers"],
        "url": "/blog/openshift/automation/2022/02/23/openshift.html",
        "teaser": "/blog/assets/images/openshift.png"
      },{
        "title": "Kubernetes Persistent Volumes and Claims",
        "excerpt":"Kubernetes Persistent Volumes and Claimes PersistentVolume Create a directory called /mnt/data on the k8s node. Within that directory, create index.html file with some text. pradeep@learnk8s$ minikube ssh -p k8s _ _ _ _ ( ) ( ) ___ ___ (_) ___ (_)| |/') _ _ | |_ __ /' _...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/27/kubernetes-persistentvolume-claims.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Storage Class",
        "excerpt":"Kubernetes StorageClass StorageClass In the previous example, we used a storageClass named manual, but that does not seem to be present. pradeep@learnk8s$ kubectl get sc NAME PROVISIONER RECLAIMPOLICY VOLUMEBINDINGMODE ALLOWVOLUMEEXPANSION AGE standard (default) k8s.io/minikube-hostpath Delete Immediate false 12d There is a storage class by name standard, and is the default...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/02/28/kubernetes-storageclass.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubectl Annotate",
        "excerpt":"Kubectl annotate Kubectl Annotate Annotations are like labels (key/value pairs), they store arbitrary string values. pradeep@learnk8s$ kubectl annotate -h Update the annotations on one or more resources. All Kubernetes objects support the ability to store additional data with the object as annotations. Annotations are key/value pairs that can be larger...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/03/01/kubectl-annotate.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Deployment Rollback",
        "excerpt":"Kubernetes Rollback Rollback If you’ve decided to undo the current rollout and rollback to the previous revision, you can do so. pradeep@learnk8s$ kubectl rollout undo deployment/nginx-deployment deployment.apps/nginx-deployment rolled back pradeep@learnk8s$ kubectl rollout status deployment nginx-deployment deployment \"nginx-deployment\" successfully rolled out pradeep@learnk8s$ kubectl rollout history deployment nginx-deployment deployment.apps/nginx-deployment REVISION CHANGE-CAUSE 2...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/03/01/kubernetes-rollback.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubectl Rollout",
        "excerpt":"Kubectl Rollout Rollout Let us take a look at the current deployments. pradeep@learnk8s$ kubectl get deployment NAME READY UP-TO-DATE AVAILABLE AGE kodekloud 4/4 4 4 13d To manage the rollout of a resource like deployments, kubernetes provides the rollout option, with which we can view rollout history, see the status...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/03/01/kubernetes-rollout.html",
        "teaser": "/blog/assets/images/kubernetes.png"
      },{
        "title": "Kubernetes Networking with Calico CNI",
        "excerpt":"Kubernetes Networking with Calico CNI Let us build another minikube cluster, this time with the Calico CNI. Minikube supports many CNIs. From the minikube start -h output, we can see the supported CNI plug-ins list. --cni='': CNI plug-in to use. Valid options: auto, bridge, calico, cilium, flannel, kindnet, or path...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/03/19/kubernetes-networking-calico.html",
        "teaser": "/blog/assets/images/calico.png"
      },{
        "title": "Kubernetes Networking with Minikube (Kindnet CNI)",
        "excerpt":"Hello! Welcome to Kubernetes Networking. Let us setup a fresh minikube cluster with default settings and with 3 nodes in it. pradeep@learnk8s$ minikube start --nodes=3 😄 minikube v1.25.2 on Darwin 12.2.1 ✨ Automatically selected the hyperkit driver 💾 Downloading driver docker-machine-driver-hyperkit: &gt; docker-machine-driver-hyper...: 65 B / 65 B [----------] 100.00%...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/03/19/kubernetes-networking.html",
        "teaser": "/blog/assets/images/kindnet.jpeg"
      },{
        "title": "Kubernetes DNS",
        "excerpt":"Kubernetes DNS When we setup our minikube cluster, it is configured to use the CoreDNS addon or its precursor, kube-dns. We can verify the same. pradeep@learnk8s$ kubectl get pods -n kube-system NAME READY STATUS RESTARTS AGE calico-kube-controllers-8594699699-dztlm 1/1 Running 2 (120m ago) 47h calico-node-gqvw6 1/1 Running 2 (119m ago) 47h...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/03/21/kubernetes-dns.html",
        "teaser": "/blog/assets/images/coredns.png"
      },{
        "title": "Kubernetes Ingress Controller",
        "excerpt":"Kubernetes Ingress Controller Enable Ingress Addon pradeep@learnk8s$ minikube addons list |-----------------------------|----------|--------------|--------------------------------| | ADDON NAME | PROFILE | STATUS | MAINTAINER | |-----------------------------|----------|--------------|--------------------------------| | ambassador | minikube | disabled | third-party (ambassador) | | auto-pause | minikube | disabled | google | | csi-hostpath-driver | minikube | disabled | kubernetes |...","categories": ["Kubernetes"],
        "tags": ["minikube"],
        "url": "/blog/kubernetes/2022/03/21/kubernetes-ingress.html",
        "teaser": "/blog/assets/images/nginx-ingress.png"
      }]
