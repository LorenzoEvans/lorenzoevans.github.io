---
title: "Ferrous Systems: Expanding Rust's Reach"
description: "An open-source compiler and toolchain, qualified for critical systems, and the future of Rust."
image: "/images/ferrous.jpeg"
pubDate: 2024-02-01
tags: ["Rust", "Compiler", "Toolchain"]
---

Recently, Ferrous Systems made a rather exciting announcement, regarding a long-term project they were ready to release. Ferrocene, a Rust compiler & toolchain, qualified by TÜV SÜD for safety and mission-critical systems.

### **Ferrous Systems: Background & History**

[Ferrous Systems](https://ferrous-systems.com/), a Rust-centric consultancy, was founded in 2018, by Florian Gilcher, James Munns, and others, with the overarching objective of bringing Rust into safety and security-critical industries. More specifically, the goal was to develop a distinct downstream version of the Rust compiler, that would remain tightly coupled to the upstream, rustc, while also sporting refinements that would allow it to meet the rigorous safety standards for software in automotive, avionic, and industrial projects.

The vision for such an achievement, alongside the capability to bring it to fruition, was borne of the deep expertise of the language possessed by the founding members, and staff. A glance at the list of people involved will yield mentions of core contributors to Rust, its infrastructure, release, and governance teams, and other parts of the ecosystem, with each individual having the better part of a decade of experience with the language. Bringing together such vast expertise with, and passion for building in, and around Rust, is reflected in the company's extensive presence in open-source development around it: they contribute meaningfully to, and help maintain projects such as [rust-analyzer](https://rust-analyzer.github.io/), rustc, and [bindgen](https://github.com/rust-lang/rust-bindgen), and are behind projects such as [Knurling](https://github.com/knurling-rs) and [nrf-hal](https://github.com/nrf-rs/nrf-hal).

Having assembled a powerhouse of Rust programmers, Ferrous is uniquely positioned to provide consultancy to individuals, managers, and of course, teams of developers, having rendered services for companies such as IBM, SUSE, and even Mozilla, which is pretty incredible, given that Rust began there, starting as a side project of Graydon Hoare's during his time at Mozilla research. Their individual and group-focused training programs span beginner, intermediate, and advanced Rust concepts, documentation, key crates, and testing, as well as a program geared toward embedded systems development.

**Taking all of this into consideration, it should come as no surprise that they're a driving force behind the expansion of the language, and the domains it can be applied to.**

### **Ferrocene: Standing Out With Standards**

Ferrocene is an **ISO 26262 (ASIL D)**, and **IEC 61508 (SIL 4)** qualified compiler and toolchain, that sits downstream of the main Rust compiler, rustc, designed with safety-critical/security use cases in mind. Furthermore, it's bolstered by the Ferrocene Language Specification (FLS), designed and developed with the expert guidance of AdaCore, who also played a key role in bringing the greater Ferrocene project to life. The language specification is comprised of existing Rust documentation, overlaid with the structure and specificity required to meet industry standards, and comply with the regulation imposed on software used in automotive or electrical components or systems, due to the potential severity resultant from malfunctions within said components and systems.

**ISO 26262 (ASIL D)**, is an international standard for categorizing the safety of electrical/electronic systems that are installed in automotive vehicles, as defined by the International Organization of Standards. From this standard, an Automotive Safety Integrity Level is defined, which classifies the risk level associated with an automotive electrical system or a component of an automotive electrical system, with D (the ASIL level Ferrocene must comply with), being the classification for those with the highest risk associated with their failure, for example, airbags, anti-lock brakes, and power steering. ASILs are chosen based on the results of hazard and risk assessments, for each electrical component, according to the properties of Severity (the degree of injury to drivers and passengers), Exposure (how frequently the hazard is experienced), and Controllability (The degree to which the driver can avoid injury from the hazard).

**IEC 61508 (SIL 4)** is an industry-agnostic, international standard for categorizing the safety of electrical/electronic programmable systems, as defined by the International Electrotechnical Commission. SILs, similar to ASILs, are broken down into hardware safety, and systematic safety integrity, and a system or device meeting some level of SIL certification must satisfy both components. SIL 4, the integrity level Ferrocene must satisfy, is reserved for the most dependable devices and systems and is defined by Layer of Protection Analysis, and Process Hazard Analysis.

### **The Road Ahead: Quality & Qualifications.**

* Ferrous Systems intends to be certified for the following safety standards:
    
    * DO-178C
        
        * **DO-178C** is a standard developed by the **Radio Technical Commission for Aeronautics (RTCA)**, that provides guidelines for the development and certification of software and hardware for airborne systems. Based on the **IEC 61508** standard, with additional criterion particular to the aerospace industry, it ensures systems that are critical to aircraft operation are reliable.
            
    * ISO 21434
        
        * **ISO 21434** is an international standard that defines criteria for cybersecurity risk management for road vehicles. It provides a framework for organizations to assess, manage, and respond to cybersecurity risks throughout the lifecycle of vehicles, from design and development, to operation and decommissioning. **ISO 21434** is used to demonstrate that a system meets the standards set forth by **ISO 26262**.
            
    * IEC 62278
        
        * **IEC 62278** is an international standard that specifies requirements for the security of, and application of safety principles to automation and control systems, particularly railway signaling interlocking systems. It defines a set of Safety Integrity Levels, or SILs, for railway signaling systems, and outlines the necessities of achieving and maintaining these SILs throughout the lifecycle of the system. **IEC 62278** is used to protect industrial automation and control systems from unauthorized access, misuse, or malicious attacks.
            

### **Where Ferrocene Goes, Rust Will Follow**

Ferrocene marks a major milestone for Rust, having received the first-ever certificate of qualification for a Rust compiler, and stands as a testament to the language's capability, and potential in an even wider range of safety-critical and mission-critical applications, such as automotive, medical, and aerospace systems. This will have a major impact on the Rust ecosystem, as it will attract new users and developers who need a safe and reliable language for their projects: while already a popular language for systems programming, the addition of safety-critical qualifications will make Rust even more attractive to development teams working on high-stakes projects where there's little to no margin for error.
