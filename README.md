# Unresponsive Node.js Server

This repository demonstrates a common issue in Node.js where a long-running synchronous operation blocks the event loop, making the server unresponsive.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution using asynchronous operations.

## Problem

The server in `bug.js` performs a 5-second synchronous operation. During this time, the event loop is blocked, preventing the server from responding to new requests or handling existing connections.  This results in an unresponsive server and a poor user experience.

## Solution

The `bugSolution.js` file demonstrates how to address this problem by using asynchronous operations. By offloading the long-running task to a worker thread or employing an asynchronous approach, the event loop remains responsive, ensuring the server can continue to handle requests efficiently.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `node bug.js` to observe the unresponsive server behavior.
4. Run `node bugSolution.js` to see the solution in action.