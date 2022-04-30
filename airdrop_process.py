#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import csv

holder_path  = "KNS-Holder-0430.txt"

holders = []
address = []

with open(holder_path) as f:
    for line in f.readlines():
        s = line.split("\n")
        holders.append(str(s[0]))

x = 1
for i in range(len(holders)):
    address.append("\'" + str(holders[i]) + "\'")

print(len(address))

with open('data/address_1.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(address[0:])

