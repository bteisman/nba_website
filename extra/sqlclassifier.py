import sys

while True:
	line = raw_input()
	l = line.split()
	if l[1][0] == 'V':
		typ = 'String'
	elif l[1][0] == 'I':
		typ = "int"
	elif l[1][0] == 'D':
		typ = "double"
	print "private " + typ + " " + l[0] + ";"