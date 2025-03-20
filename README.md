# pigeoff-cli

pigeoff-cli is a command-line interface (CLI) tool designed to facilitate working with HTTP requests directly from JSON files and the terminal. This utility streamlines the process of crafting, sending, and managing HTTP requests, making it especially useful for developers and testers who frequently interact with APIs.

## Features

- **JSON-Driven Requests**: Define HTTP requests in JSON format for consistency and reusability.
- **Terminal Integration**: Execute HTTP requests directly from the terminal, enhancing workflow efficiency.
- **Flexible Configuration**: Easily specify request methods, headers, body content, and more.

## Installation

To install pigeoff-cli, ensure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm install -g pigeoff-cli
```

This command installs pigeoff-cli globally, allowing access from any terminal session.

## Usage

Create a JSON file (e.g., request.json) to define your HTTP request:

```JSON
{
  "method": "GET",
  "url": "https://api.example.com/data",
  "headers": {
    "Authorization": "Bearer your_token_here"
  }
}
```

Execute the request using pigeoff-cli:

```bash
pigeoff
```

The tool reads the JSON file, performs the specified HTTP request, and outputs the response directly in the json format.

## Examples
See the [`examples`](https://github.com/IsmailBinMujeeb/pigeoff-cli/tree/main/examples) directory in the repository for sample JSON request files demonstrating various use cases.

Contributing
Contributions are welcome! Feel free to submit issues or pull requests to enhance the functionality of pigeoff-cli.

License
This project is licensed under the MIT License.