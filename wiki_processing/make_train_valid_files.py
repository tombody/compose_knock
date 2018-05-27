#! /usr/bin/python

import random
import sys
import time

def write_file(title, body):
    file = open(f'{title}.txt','w')
    file.write(body)
    file.close()
    pass

def make_train_valid(in_f, train_path, val_path, p):
    t0=time.time()
    x,t,v = 0,0,0

    with open(in_f, 'rb') as f:
        for line in f:
        #for i in range(3): #used for testing
            if random.random()>p: # probability associated to training set
                write_file('{}train_{}'.format(train_path,x),f.readline().decode('utf-8'))
                t+=1
            else: #reciprocal probability associated to validation set
                write_file('{}val_{}'.format(val_path,x),f.readline().decode('utf-8'))
                v+=1
            x+=1
            if (x%10000==0):
                print('Processed {} articles in {:.2f} sec | Train set = {} | Validation set = {}'.format(x,time.time()-t0,t,v))
    print('Processing completed in {:.2f} sec'.format(time.time()-t0))
    pass



if __name__ == '__main__':
    if len(sys.argv)!=5:
        print('Usage: python make_train_valid.py <wikipedia txt file> <train path> <validation path> <p(validation)>')
        sys.exit(1)

    in_f, train_path, val_path, p =  sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
    try:
        p=float(p)
        if p < 0 or p > 1:
            raise TypeError()
    except:
        print('p(validation) must be decimal between 0 and 1')
        sys.exit(1)
    make_train_valid(in_f, train_path, val_path, p)

