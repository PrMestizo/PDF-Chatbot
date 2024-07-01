# PDF-Chatbot

This repository contains a chatbot designed to answer questions about the content of PDF documents. It leverages the power of LangChain to extract information from PDFs, OpenAI's API for natural language processing and generation, and Pinecone as a vectorstore for efficient semantic search and retrieval of relevant information.

Key Features:

* **PDF Ingestion:** Easily upload and process PDF documents.
* **LangChain Integration:** Streamlines the extraction and manipulation of text from PDFs.
* **OpenAI-Powered:** Utilizes OpenAI's advanced language models for understanding questions and generating accurate, informative responses.
* **Pinecone Vectorstore:** Enables fast and relevant retrieval of information from the PDF documents based on semantic similarity.

## Setup
Before running Personal AI, you need to set a few environment variables:

### OpenAI API Access
```
OPENAI_API_KEY=<your-openai-api-key>
```
How to get you OpenAI API Key https://platform.openai.com/account/api-keys

### Pinecone API Access
```
PINECONE_API_KEY=<your-pinecone-api-key>
```
```
PINECONE_ENVIRONMENT=<your-pinecone-environment>
```
```
PINECONE_INDEX=<your-pineconde-index>
```
