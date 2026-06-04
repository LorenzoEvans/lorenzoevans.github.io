---
title: "Exploring Asynchronicity In Rust"
description: "On Rust's handling of asynchronicity and the ecosystem's tools."
image: "/images/linux.jpg"
pubDate: 2024-02-01
tags: ["Rust", "Async"]
---

One of the fundamental aspects of programming is dealing with time, and the fact that some of the operations a program is designed to carry out, may take some time to complete, meaning the results will not be immediately available. In computer parlance, such situations can be said to have the property of asynchronicity, and are navigated by programmers via the use of a number of tools, techniques, and concepts, which are referred to as asynchronous programming.

As a language, Rust has some innovative and perhaps idiosyncratic takes on a number of the tools, techniques, and concepts that are commonly used to handle asynchronicity and write asynchronous code. Being aware of what these idiosyncrasies are, how they work, and how they relate, is key to writing performant, idiomatic, and robust Rust code.

## Async Rust: A Concise Overview

While Rust supports asynchronous programming, it doesn't provide the necessary runtime: rather, the Rust ecosystem provides this functionality, in the form of crates, that provide the tools necessary to execute asynchronous code.

Also, Async Rust, is still actively being developed, and is considered to be meaningfully distinct from Sync Rust. The two classes of code can't be combined without consideration: you can't call an asynchronous function from a synchronous function, for reasons we'll delve further into later in the article. Interestingly enough, there are even complications with combining pieces of asynchronous code, as they may depend on different runtimes that have conflicting methods or models of how code should be executed!

Now, let's dive into some of the ways Rust goes about handling asynchronicity.

## Async/Await

The async and await keywords are the simplest and most straightforward option for asynchronous programming in Rust. The async keyword allows for the associated code to be treated like a state machine by the compiler, which can then be advanced to the desired state, where some operation has been completed and produced a usable value.

Functions and code blocks labeled async, will have a return value of impl Future, meaning the function can return any type that implements the Future trait. In order to actually access the expected value, we await the Future, which will attempt to run it to completion, yielding control of the current thread when the future is blocked, and resuming execution when the Future can move forward. Using await is only valid in async contexts, i.e functions, closures and blocks that provide a Future for it to attempt to drive to completion. This is why synchronous functions can't call asynchronous ones: the asynchronous function will attempt to return a impl Future (some type that implements the eponymous trait) to the synchronous function body, which won't be capable of awaiting the Future to drive it to completion, because it's not an async context!

Naturally, Async/Await are great entry level tools, as they provide some highly familiar syntactic sugar over a portion of the more idiosyncratic, and involved methods, internals, and mechanics that the language provides for asynchronous programming.

## Futures

Futures exist at the core of asynchronous programming in Rust, and represent computations that are currently ongoing, and the expecting result of said computation. The core of futures, however, is the Future trait, which defines the poll method. The poll method takes a Future, and evaluates it to a concrete value, or schedules it to be woken up by a Waker if it can't do so- in fact the await keyword actually invokes this very method! Wakers make sure that Futures move forward with whatever computation they're doing, and are generated from the _context_ passed to the poll method, allowing a Waker to be assigned to a specific task. A Waker can indicate to Executor that progress can be made on a task, with the wake method, so that the associated Future can be polled again. Executors are the main construct provided by asynchronous runtimes, and manage the coordination of the execution of operations such as polling Futures, waking tasks up, etc.

Futures, and the Future trait, are the core of asynchronous programming in Rust, providing an encapsulation of asynchronous computation, and the expected results. While they can appear intimidating, they can be understood, and the benefits of that make it well worth the effort.

## Tasks

Tasks are concurrent constructs for asynchronous computation in Rust, and have some meaningful overlap with Futures, and threads.

Similar to how threads can be given anonymous functions to execute, Tasks can be given multiple Futures to drive to completion. In fact, Tasks themselves, are just top-level futures that have been handed over to the Executor of a runtime. They differ in that, where a Future represents a single computation, Tasks represent a broader unit of work, that can contain multiple Futures, their Wakers and Contexts, and carry information such as where a Future lives in memory, and whether it's Pending or Ready. Their hierarchical relationship to Futures, coupled with their ability to coordinate multiple units of work, makes clear their significance in Rust's asynchronous programming model.

In short, Tasks provide a layer of abstraction over the execution and coordination of the computation represented by Futures, as well as an environment in which they can be continuously polled, woken up, and eventually progress to completion.

## Streams

Streams represent a series of values that result from ongoing operations, and by design, are effectively the asynchronous sibling of iterators: the API mirrors that of iterators in some notable ways, providing combinators and adapters such map, and filter, by way of the StreamExt trait.

Just like Tasks, they share some properties with Futures such as having an associated Context, having an eponymous trait name, and as well, a polling function, poll_next, which is responsible for pulling subsequent values out of the Stream. In fact, a Stream is just a special kind of Future, and there are methods defined for both that allow for converting from one to the other. Streams are a conduit for Tasks to communicate with each other in order to exchange and synchronize data, similar to how threads use channels to communicate. Tasks can take on the role of producer, placing values in a stream that can then be accessed by other Tasks, playing the role of consumer, without the overhead incurred by direct coordination.

Overall, streams provide a powerful abstraction over the nuances of task communication, data exchange, and synchronization.

## Runtimes

At the outset of the article, we breezed over the concept of runtimes, despite them being necessary for running the very kind of code we set out to learn about, and so to wrap this up, we should circle back to it.

A runtime refers to the underlying system that provides essential services and manages resources for executing programs. It handles tasks such as memory management, scheduling, I/O and thread management.

In the context of asynchronous programming, an asynchronous runtime is a specialized runtime that enables the execution of asynchronous code by providing the necessary infrastructure and abstractions. It achieves this by leveraging non-blocking I/O operations, cooperative multitasking, and event loops. Asynchronous runtimes provide a framework for managing and scheduling async tasks, ensuring that they are executed efficiently and concurrently. If you're looking for some options to experiment with and learn more, here are three options you'll likely run across:

- [async-std](https://async.rs/): async-std is a popular asynchronous runtime crate that provides a comprehensive set of features for writing asynchronous code. It offers a user-friendly API, efficient task management, and support for various I/O operations. async-std is a suitable choice for building robust and scalable asynchronous applications.
- [smol](https://github.com/smol-rs/smol): smol is another notable runtime crate that focuses on simplicity and performance. It offers a lightweight and minimalistic API, making it easy to get started with asynchronous programming. Smol emphasizes efficiency and aims to provide a fast and predictable runtime for async tasks.
- [Tokio](https://tokio.rs/): Tokio is a widely-used asynchronous runtime crate that provides a robust and feature-rich environment for developing high-performance asynchronous applications. It offers a comprehensive set of tools for managing tasks, I/O, and concurrency. Tokio is known for its reliability and suitability for building complex and scalable async systems.

Wrapping it all up, Rust offers a robust and unique set of tools to handle asynchronous programming, and becoming familiar with some of them is part and parcel of writing high quality code. The async ecosystem has much more to offer than what was broached here, and I'd highly recommend exploring it further, so here are a few options to get you started:

- [async-graphql](https://github.com/async-graphql/async-graphql)
- [Understanding Rust futures by going way too deep](https://fasterthanli.me/articles/understanding-rust-futures-by-going-way-too-deep)
- [Async Foundations Working Group](https://rust-lang.github.io/wg-async/welcome.html)
- [Learning Async Rust With Entirely Too Many Web Servers](https://ibraheem.ca/posts/too-many-web-servers/)


