#! /usr/bin/python


# import required libraries
from fastai.learner import *

import torchtext
from torchtext import vocab, data
from torchtext.datasets import language_modeling

from fastai.rnn_reg import *
from fastai.rnn_train import *
from fastai.nlp import *
from fastai.lm_rnn import *

import dill as pickle
import spacy

# data setup
PATH='data/'

TRN_PATH = 'wiki_train/train_files/'
VAL_PATH = 'wiki_valid/validation_files'
TRN = f'{PATH}{TRN_PATH}'
VAL = f'{PATH}{VAL_PATH}'

# creating language model
spacy_tok = spacy.load('en')
TEXT = data.Field(lower=True, tokenize="spacy")
bs=64
bptt=70

FILES = dict(train=TRN_PATH, validation=VAL_PATH, test=VAL_PATH)
md = LanguageModelData.from_text_files(PATH, TEXT, **FILES, bs=bs, bptt=bptt,\
min_freq=10)

pickle.dump(TEXT, open(f'{PATH}models/TEXT.pkl','wb'))

print('batches = {}; unique tokens in the vocab = {}; tokens in the training\
 set = {}; sentences = {}'.format(len(md.trn_dl), md.nt, len(md.trn_ds),\
 len(md.trn_ds[0].text)))

# training
em_sz = 200  # size of each embedding vector
nh = 500     # number of hidden activations per layer
nl = 3       # number of layers

opt_fn = partial(optim.Adam, betas=(0.7, 0.99))

learner = md.get_model(opt_fn, em_sz, nh, nl,\
dropouti=0.05, dropout=0.05, wdrop=0.1, dropoute=0.02, dropouth=0.05)
learner.reg_fn = partial(seq2seq_reg, alpha=2, beta=1)
learner.clip=0.3

learner.fit(3e-3, 4, wds=1e-6, cycle_len=1, cycle_mult=2)

learner.save_encoder('adam1_enc')

learner.load_encoder('adam1_enc')

learner.fit(3e-3, 1, wds=1e-6, cycle_len=10)

learner.save_encoder('adam3_10_enc')

pickle.dump(TEXT, open(f'{PATH}models/TEXT.pkl','wb'))
