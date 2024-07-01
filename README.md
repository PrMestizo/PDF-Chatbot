# PDF-Chatbot

This repository contains a chatbot designed to answer questions about the content of PDF documents. It leverages the power of LangChain to extract information from PDFs, OpenAI's API for natural language processing and generation, and Pinecone as a vectorstore for efficient semantic search and retrieval of relevant information.

Key Features:

* **PDF Ingestion:** Easily upload and process PDF documents.
* **LangChain Integration:** Streamlines the extraction and manipulation of text from PDFs.
* **OpenAI-Powered:** Utilizes OpenAI's advanced language models for understanding questions and generating accurate, informative responses.
* **Pinecone Vectorstore:** Enables fast and relevant retrieval of information from the PDF documents based on semantic similarity.

## Setup 💻
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
PINECONE_INDEX=<your-pineconde-index>
```

## Instructions 📃

### Script 1: ingestion.py
This script processes PDF documents, splits them into chunks, generates embeddings, and stores these embeddings in a Pinecone vector store.
 
1. Place your PDF files in a directory named Data.
2. Ensure you have a .env file with your Pinecone API key and index name.
3. Run the script to store embeddings.

### Script 2: main.py
This script loads stored embeddings from Pinecone and uses them to answer questions.

1. Ensure the .env file contains your Pinecone API key and index name.
2. Run the script and pass your question to get an answer. 
