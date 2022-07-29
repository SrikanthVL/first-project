FROM python
WORKDIR /root/sri
COPY add.py ./
CMD ["python","./add.py"]
