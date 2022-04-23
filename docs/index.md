---
title: Introduction to Simulator
sidebar_label: Overview
slug: /
image: /img/meta/open-graph.png
hide_table_of_contents: true
demoUrl: https://docs-demo.ionic.io/
demoSourceUrl: http://localhost:8080/git/docs-demo
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Simulator</title>
  <meta
    name="description"
    content="Platform Simulator tools."
  />
  <link rel="canonical" href="http://localhost:8080/docs" />
  <link rel="alternate" href="http://localhost:8080/docs" hreflang="x-default" />
  <link rel="alternate" href="http://localhost:8080/docs" hreflang="en" />
  <meta property="og:url" content="http://localhost:8080/docs" />
</head>

The Altiostar Simulator adds to the capabilities of the industry- standard test mobile to provide a full wrap-around test of a 5G gNB for 5G standalone (SA) mode.

Simulator enables the user to create and run customizable message flows for many different simulated scenarios. 

Get started building by [installing Simulator](intro/cli.md) or following our [First App Tutorial](intro/next.md#build-your-first-app) to learn the main concepts.

<intro-end />

<DocsCards>
  <DocsCard header="Installation Guide" href="/intro/cli" icon="/icons/guide-installation-icon.svg" hoverIcon="/icons/guide-installation-icon-hover.svg">
    <p>Step-by-step guides to setting up your system and installing the framework.</p>
  </DocsCard>

<DocsCard
  header="UI Components"
  href="/components"
  icon="/icons/guide-components-icon.svg"
  hoverIcon="/icons/guide-components-icon-hover.svg"
>
  <p>Dive into Simulator beautifully designed UI component library.</p>
</DocsCard>

<DocsCard
  header="Native Functionality"
  href="/native"
  icon="/icons/guide-native-icon.svg"
  hoverIcon="/icons/guide-native-icon-hover.svg"
>
  <p>Integrate native device plugins, like Bluetooth, Maps, HealthKit, and more.</p>
</DocsCard>

  <DocsCard header="Theming" href="/theming/basics" icon="/icons/guide-theming-icon.svg" hoverIcon="/icons/guide-theming-icon-hover.svg">
    <p>Learn to easily customize and modify your Simulator app's visual design to fit your brand.</p>
  </DocsCard>
</DocsCards>

## Overview

3GPP defines a new 5G Core network, referred to as 5GC, as well as a new radio access technology called 5G “New Radio” (NR). Unlike previous generations that required that both access and core network of the same generation to be deployed (e.g., Evolved Packet Core (EPC) and Long Term Evolution (LTE) together forms Evolved Packet System (EPS)), with 5G it is possible to integrate elements of different generations in Standalone (SA) and Non-standalone (NSA) configurations.

The significant feature of 5G is its capability to support enormous services and applications, massive connections, new channel coding scheme at very high bandwidth—up to 20 Gbps and utilizing very high frequency bands up to 100 GHz as well as the legacy cellular frequency bands. The 5G can also operate in the existing LTE frequency bands, or in even smaller bands, as the usable bandwidth is scalable.

However, deploying high-quality voice, video, and data services over 5G has posed significant challenges for service providers, due to backward compatibility, inter-operability, and high-quality requirements – all of which require rigorous testing.

As depicted in the above network architecture, the End-to-End 5G network comprises of 5G Access Network (gNB), Access and Mobility Management Function (AMF), Authentication Server Function (AUSF), Network Slice Selection Function (NSSF), Unified Data Management (UDM), Session Management Function (SMF), Short Message Service Function (SMSF), Equipment Identity Register (EIR) and User Plane Function (UPF) connected to Data Server or Application Functions and to EPC/IMS core for interoperability.

MAPS™ 5G supports service-based architecture, includes a set of Network Functions (NFs) providing services as defined in 3GPP TS 23.501. Services use REST APIs based on HTTP and JSON data format.

GL’s comprehensive Signaling and Traffic Emulation 5G test equipment suite for 5G Wireless Network, referred commonly as MAPS™, provides a unique programmable, scriptable framework for 5G device test, that is independent of any protocol or network, makes it easy to perform cross-domain testing and transition tests to new technology such as 5G. The core network and all its underlying entities can be accurately tested for functionalities and performance.

### vRAN Architecture

As illustrated in Figure 8, Altiostar’s vRAN architecture consists of eNB virtual Centralized Unit
(vCU), eNB virtual Distributed Unit (vDU), virtual EMS (vEMS), Radio Interface Unit (RIU) and 3rd
party Remote Radio Head (RRH) and Antennas.

Each cell-site may have multiple 3rd party RRHs and Antennas. These are connected to a single
RIU over CPRI. Multiple such RIUs interface with a single instance of an vDU, which can be run
in an edge data center cloud. Multiple such vDUinstances interface with a single instance of an
vCU, which can be run in a centralized data center cloud. Multiple such vCU instances interface
with a single instance of vEMS, which can be run in a centralized data center cloud. vDU and
vCU can be run in the same data center cloud.

<img
  src="/docs/img/telecomm/open-vran-model.jpg"
  alt="Image of Paradigm Shift on Telecom"
/>

### Paradigm Shift on Telecom

<img
  src="/docs/img/telecomm/paradigm-shift.jpg"
  alt="Image of Paradigm Shift on Telecom"
/>

### Clean, simple, and functional design

Simulator is designed to work and display beautifully on all current mobile devices and platforms. With ready-made components, typography, and a gorgeous (yet extensible) base theme that adapts to each platform, you'll be building in style.

### Native and Web optimized

Simulator emulates native app UI guidelines and uses native SDKs, bringing the UI standards and device features of native apps together with the full power and flexibility of the open web. Simulator uses Capacitor (or Cordova) to deploy natively, or runs in the browser as a Progressive Web App.

## Goals

### Cross-platform

Build and deploy apps that work across multiple platforms, such as native iOS, Android, desktop, and the web as a Progressive Web App - all with one code base. Write once, run anywhere.

### Web Standards-based

Simulator is built on top of reliable, [standardized web technologies](reference/glossary#web-standards): HTML, CSS, and JavaScript, using modern Web APIs such as Custom Elements and Shadow DOM. Because of this, Simulator components have a stable API, and aren't at the whim of a single platform vendor.

### Beautiful Design

Clean, simple, and functional. Simulator is designed to work and display beautifully out-of-the-box across all platforms.
Start with pre-designed components, typography, interactive paradigms, and a gorgeous (yet extensible) base theme.

### Simplicity

Simulator is built with simplicity in mind, so that creating apps is enjoyable, easy to learn, and accessible to just about anyone with web development skills.

## Framework Compatibility

While past releases of Simulator were tightly coupled to Angular, version 4.x of the framework was re-engineered to work as a standalone <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a> library, with integrations for the latest JavaScript frameworks, like Angular. Simulator can be used in most frontend frameworks with success, including React and Vue, though some frameworks need a shim for full Web Component support.

### JavaScript

One of the main goals with moving Simulator to <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> was to remove any hard requirement on a single framework to host the components. This made it possible for the core components to work standalone in a web page with just a script tag. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Simulator as a standalone library in a single page even in a context like WordPress.

### React

Simulator now has official support for the popular React library. Simulator React lets React developers use their existing web skills to build apps that target iOS, Android, the web, and the desktop. With `@ionic/react`, you can use all the core Simulator components, but in a way that feels like using native React components.

### Future Support

Support for other frameworks will be considered in future releases.

## Simulator CLI

The official [Simulator CLI](cli), or Command Line Interface, is a tool that quickly scaffolds Simulator apps and provides a number of helpful commands to Simulator developers. In addition to installing and updating Simulator, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Appflow](#appflow) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## License

The Simulator UI Toolkit is a free and open source project, released under the permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="http://localhost:8080/git" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.
