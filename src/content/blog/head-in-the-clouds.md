---
title: "Head In The Clouds"
description: "An overview of cloud computing concepts and security aspects."
image: "/images/cloud-computing.jpg"
pubDate: 2024-01-01
tags: ["Cloud Computing", "Cyber Security", "Software Infrastructure"]
---

As of late, I've been venturing into the cloud & security- mainly on a lark, but with an endgoal of some certification or another, and somehow, while expecting it to be convoluted, I really didn't appreciate just how nebulous, blurry, and interwoven the internals of this sector were.

The fundamentals, as I perceive them so far, are the CIA triad (an existential technological Freudian slip if ever such a thin existed), the primary deployment models, the primary service models, and the distribution of responsibilities between the cloud service provider, and the customer.

## The CIA Triad 

Let's just get the humor in the name out of the way: in a post-Snowden world, the concept of cloud security being boiled down to an acronym matching that of the three letter agency that has a joint intelligence operation (Special Collection Service) with the NSA is *truly surreal*.

And the icing on the cake? The acronym is bookended by the term for transnational organize crime syndicates.


### Overview

The CIA Triad is a compression of wisdom gained by information security professionals, with key events and artifacts being <a href="https://csrc.nist.gov/files/pubs/conference/1998/10/08/proceedings-of-the-21st-nissc-1998/final/docs/early-cs-papers/bell76.pdf">a 1976 Air Force study</a>, <a href="https://theory.stanford.edu/~ninghui/courses/Fall03/papers/clark_wilson.pdf">a 1987 paper in computing</a>, and <a href="https://www.cs.umd.edu/class/fall2019/cmsc818O/papers/morris-worm.pdf">the Morris worm</a> in 1988: these correspond to Confidentiality, Integrity, and Availability. The concept seems to have coagulated by 1998, when Donn Parker extended it in his book *Fighting Computer Crime*.


### Confidentiality

The rule of thumb is to prefer *Confidentiality over Disclosure*.

Confidentiality is about ensuring and maintaining that business critical data, IP, and trade secrets are only made accessible to the necessary parties. A general process to ensure confidentiality is apply encryption at the appropriate levels (depending on cloud service and deployment model), and states, i.e DIM/T (Data In Motion/Transit), DAR (Data At Rest), and DIU (Data In Use), and then authenticate identities, that are then authorized to access data. Depending on the organization, data access can be mapped to roles, responsibilities, sensitivity classifications, and handled with 2/MFA, with these being something you know, have, or are, typically.

### Integrity

The rule of thumb is to prefer *Integrity over Alteration*.

Integrity is about making sure that our data is accurate, and remains so over time, so that business critical functions that rely on it, can run smoothly. Integrity comprises a number of validations, that interweave, naturally, with Confidentiality. The practice of data validation, ensures that whatever data is in Motion/Transit, at Rest, or in Use, is what we expected to be. This can be achieved with some rudiments of the trade, namely logs, checksums, and back up systems: data can be validated at the entry and exit points of each state, hashed, and the digest can be logged, after which the data is backed up. The last point is critical, as having data redundancy in digital and physical form is key to keeping operations in tact under large scale critical events, such as natural disasters or provider outages.

### Availability

Availability is about ensuring that our data is accessible throughout the execution of business critical processes that rely on it. 
At first, this may come across as contradictory to the concept of *Confidentiality*, but it is in fact simply the other side of the coin: that we do not what data to be accessible to unauthorized and unauthenticated parties, the remaining parties are in fact *exactly* who we *want* to be able to access data, when needed. This concept dovetails with several other concepts, such as Redundancy, and Scalability, which, when delivered properly, help to strengthen the availability of data, by making sure that server outages or rapid increases in demand, do not make data inaccessible.

The rule of thumb is to prefer *Availability over Destruction*.

## Cloud Service Models 

Generally speaking, there are three flavours of service model for the cloud, that CSP's (Cloud Service Providers) can make available to potential customers, *IaaS*, *PaaS*, and of course, *SaaS*. The properties that distinguish between these two, at least in this context, are the degree to which the customer has control over the resources they're purchasing, and the distribution of responsibility between the CSP, and the customer. Within these models, the customer is always responsible for GRC (Governance, Risk, Compliance) and data security (proper encryption, disposal, redundancy, etc), and the CSP is always responsible for the physical security of the data center and the hardware therein.

### IaaS

In a sense, *IaaS (Infrastructure as a Service)* is the fundamental cloud deployment model, in that it exists in the following two at some lower level of abstraction, and that said existence is a logical and technological necessity for the creation of the subsequent deployment models. As such, it exists as an abstraction layer right above the data center, which contains the hardware that runs the software services configured by IaaS customers. Within this layer, the CSP manages virtualization, servers, storage, and networking, and provides them to the customer, who has control over the operating systems, application runtimes, data, and the application software itself. Here, the services provided are effectively raw *resources*, analagous to a list of ingredients from which several recipes could be assembled.

### PaaS 

Existing at a higher level of abstraction, is *PaaS (Platform as a Service)*, which often provides the same resources as *IaaS*, in a preconfigured way, where the CSP, handles the provisioning and configuration of the operating systems, and database management/development tools, alongside the virtualization, networking, and storage capabilities. At this level, all that lies under the sole discretion of the customer is the application software, which will run on the platform using some arrangement of pre-configured and managed resources, *and* services (CI/CD, 3rd-party integrations, telemetry, etc). Here, the resources are provided *by way of the service*, in a manner analagous to a list of recipes, where the ingredients and proportions have been decided prior, but the method of preparation of the dish is still at the behest of the consumer.


### SaaS 

At the highest level of cloud service models, sits *SaaS*, which goes beyond the prior two, and bundles the services, comprised of resources, into applications, that are then provided as products to the consumer. Within this layer, very little is under the control of the customer, chiefly the data flowing through the application, and the settings of the application made available to users. The CSP is responsible for managing load-balancing, CI/CD pipeline infrastructure, encryption, security patching for application dependencies, effectively, the entire gamut, minus GRC and data security.
The obvious analogy for this metaphor is the restaurant, wherein you are given a menu, are made aware of the ingredients (and perhaps proportion), and have slight input over the preparation of the meal (hold this ingredient, over easy vs scrambled, etc), but are entirely freed from having to make any decisions or take any actions required to ensure said preparation is executed properly.

That being said, you will still be required to navigate the dinner table, distinguishing between dinner and oyster fork, knowing how to signal waiters for the check, and how to properly close your to go box.

The meaning of these metaphors in this context is left as an exercise for the reader.

## Cloud Deployment Models 

### Private

Private cloud deployment models generally sit on the fence, in the sense
that typically, the use-cases for a private cloud are handled by what's 
known as an on-premises network. That being said, this type of 
cloud deployment does offer the best of both worlds, in that it provides a solution that is isolated (which prevents some of the risks associated with having to share resources with other customers), yet offers the customer 
the flexibility associated with using cloud services. The private cloud can
be hosted by a third party, or located at the onsite data center, and the underlying hardware and software will be dedicated entirely to the organization making use of said resources. You typically encounter these in mid to 
large scale organizations and institutions, that can handle the IT requirements incurred by the increased control and responsibility, and have need for very very bespoke cloud architectures specific to whatever industry in 
the private sector they provide services for.

### Public

Public clouds, are much more run of the mill, in that they entail a third 
party, provider of resources, which, by way of the internet, provides a 
multi-tenant architecture, where multiple organizations configure their cloud resources, which ultimately belong to a single pool of resources from which multiple customers will extract services. Azure and GCP are great examples of this, in that they generally handle everything except for the application code that runs on the cloud, and the infrastructure configuration that describes what resources will be used at what rate, for some specified purposes.

The main benefit of this model, which is somewhat of an extension of the 
general value of cloud computing, is that it frees customers and companies
from having to be responsible for the management of underlying resources, which highly reduces business expenditures. Alongside this of course, comeproperties such as scalability, redundancy, and elasticity, which allow 
organizations to consume as little, or as much of a given resource, as 
is required to satisfy customer demand, at any given point in time. 


### Hybrid

Hybrid cloud is a mixture of private and public cloud, allowing for businesses to define where certain aspects of their cloud infrastructure are hosted, or located, and benefit from some of the properties of cloud computing without entirely overhauling their existing infrastructure, or incurring some of the risks associated with an entirely public cloud solution.

For example, a common benefit of the hybrid model, is that it enables 
cloud bursting, where demand for use of an application is handled by a 
private cloud, until it reaches a certain point, at which resources from 
a third party provider are brought in to satisfy increasing demand.
Alongside this, workloads can be migrated from on-premises architectures, or networks, to cloud-native services, without refactoring, so that business uptime is maintained, and services are still provided from within the new environment/architecture.

### Community 

Community cloud models are a newer addition, and generally are associated 
with groups of individuals, or organizations, who have similar, values, needs, and interests, for example, federated social networks and platforms, or networks of forums and sites. Community clouds in spirit are most similar to hybrid networks, in that the customers or organizations making use 
of it, will tend to have some degree of control over the hosting and use of the resources, and a greater degree of privacy regarding access to the network, resources, and data flowing through hosted applications. 
This leads to an increased security level, albeit at the cost of being more expensive than entirely public deployment models. 

These kinds of architectures tend to be associated less with companies, and more with organizations, be it public or government, because they tend to be bound by regulations that make entirely public architectures undesirable, and because they tend to require coordination between more than one entity in order to be made useable. 

These types of clouds can also be more complicated to impliment, because the mission statements, economic goals, resource requirements, and 
industry standards may vary between each organization making use of the 
cloud, such that they all must be synthesized into a coherent operational 
standard, to avoid jeapordizing the legal, financial, or reputational 
standing of the organization.

---

All in all, cloud architectures require three things, Confidentiality, Availability, and Integrity of the data flowing through them, and can be implemented with three levels of (decreasing) granularity, from IaaS to PaaS to SaaS, and four flavours or types, Private, Public, Hybrid, and more recently, Community, which can be seen as a Hybrid model with a specific use 
case. 

Below I've got some cool links I stumbled upon while looking into the 
CIA Triad, for those of you who are inclined to the (offensive) security 
side of things.

That's all for now- I don't know if I'll continue my learning of cloud computing or not, but this was an interesting rabbit hole to get into.


- [Nasa Paper on Morris Worm & NAS Supercomputer](tab:http://foofus.com/amuse/public/Morris_Worm_Incident_Report_1.pdf)

- [Morris Worm Code Archive](tab:http://ftp.cerias.purdue.edu/pub/doc/morris_worm/)

- [Hackers Wisdom](tab:https://www.ee.torontomu.ca/~elf/hack/index.html)
